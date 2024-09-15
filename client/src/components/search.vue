<template>
  <div id="search">
    <div class="input-wrap" @mouseleave="bing_hide">
      <section>
        <input :class="{ 'bold': inputText }" v-model="inputText" @keydown="input_keydown" @dblclick="input_clean"
          placeholder="请输入搜索的内容" @mouseover="bing_show" />
        <p>
          <span v-if="inputText" @click="input_clean" title="清除">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M1 13.5L14 0.5" stroke="#A0A0A0" />
              <path d="M1 0.499999L14 13.5" stroke="#A0A0A0" />
            </svg>
          </span>
          <a href="" target="_blank" @mouseover="bing_hide">
            <img src="/favicon/google.com.ico" />
          </a>

        </p>

      </section>
      <ul class="bing" @click="bing_click" @mouseleave="bing_hide">
        <li v-if="inputText" class="lang" @click="lang_click">
          <p> {{ translatedText }} </p>
          <span> 切换语言 </span>
        </li>
        <li v-for="suggestion in suggestions" :key="suggestion.url">
          <a :data-href="suggestion.url" target="_blank">{{ suggestion.text }}</a>
          <span>立即搜索</span>

        </li>
      </ul>

      <!-- <bing :searchTerm="inputText" /> -->
    </div>
    <div class="commonly_used">
      <ul @click="use_click" @mouseover="ul_mouseover">

        <li>
          <a data-href="http://www.google.com/" data-search="http://www.google.com/search?q={s}">
            <img src="/favicon/google.com.ico" />
            <p>google</p>
          </a>
        </li>

        <li>
          <a data-href="http://cn.bing.com/" data-search="http://cn.bing.com/search?q={s}">
            <img src="https://www.bing.com/favicon.ico">
            <p>必应搜索</p>
          </a>
        </li>

        <li>
          <a data-href="https://www.douyin.com/" data-search="https://www.douyin.com/search/{s}">
            <img title="抖音" src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico">
            <p>抖音</p>
          </a>
        </li>

        <li>
          <a data-href="https://www.xiaohongshu.com/" data-search="https://www.xiaohongshu.com/search_result?keyword={s}">
            <img title="小红书" src="https://www.xiaohongshu.com/favicon.ico" />
            <p>小红书</p>
          </a>
        </li>

        <li>
          <a data-href="http://www.zhihu.com/" data-search="https://www.zhihu.com/search?type=question&q={s}" title="知乎">
            <img src="/favicon/zhihu.com.ico">
            <p>知乎</p>
          </a>
        </li>

        <li>
          <a data-href="http://www.baidu.com/" data-search="https://www.baidu.com/s?wd={s}" title="百度一下">
            <img src="/favicon/baidu.com.ico">
            <p>百度</p>
          </a>
        </li>

      </ul>
      <h4>快捷搜索</h4>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
// import bing from './bing.vue'
import cheerio from 'cheerio';

export default {

  setup() {

    const inputText = ref(""); // 输入文本
    const translatedText = ref(""); // 翻译结果
    let suggestions = ref([]);

    // 监听inputText的变化，并实时翻译文本
    watch(inputText, async (newValue) => {
      if (newValue === "") {
        translatedText.value = "";
        suggestions.value = [];
        return;
      }
      translatedText.value = '正在翻译...'
      suggestions.value = await getbing(newValue);
      translatedText.value = await translateText(newValue);

    });

    async function getbing(searchTerm) {
      try {
        const response = await fetch(`http://127.0.0.1:3000/bing?url=${searchTerm}`);
        const data = await response.text();
        return parseHTML(data);
      } catch (error) {
        console.error('Error:', error);
        return []; // 返回空数组或其他默认值，表示请求失败
      }
    }

    function parseHTML(htmlString) {
      const $ = cheerio.load(htmlString);
      const data = [];
      $('.sa_sg').each((index, element) => {
        const url = $(element).attr('url');
        const text = $(element).find('.sa_tm_text').text();
        data.push({ url, text });
      });
      return data;
    }

    // 替换搜索引擎的关键词，并翻译文本
    async function translateText(text) {
      // 判断输入文本的语言类型
      const languageType = detectLanguage(text);
      const apiUrl = "https://wonvy.cn/fanyi";

      try {
        let sourceLanguage, targetLanguage;
        // 根据语言类型设置源语言和目标语言
        if (languageType === "chinese") {
          // 如果输入文本是中文，则翻译为英文
          sourceLanguage = "zh";
          targetLanguage = "en";
        } else {
          // 如果输入文本是英文或混合文本，则翻译为中文
          sourceLanguage = "en";
          targetLanguage = "zh";
        }

        const data = {
          text: text,
          source: sourceLanguage,
          target: targetLanguage,
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        return result.translation;
      } catch (error) {
        console.error("Error translating text: ", error);
        return "";
      }
    }

    // 判断输入中英文比重
    function detectLanguage(inputText) {
      const chineseRegex = /[\u4e00-\u9fa5]/; // 中文字符的正则表达式
      const englishRegex = /[a-zA-Z]/; // 英文字符的正则表达式

      let chineseCount = 0;
      let englishCount = 0;

      for (const char of inputText) {
        if (chineseRegex.test(char)) {
          chineseCount++;
        } else if (englishRegex.test(char)) {
          englishCount++;
        }
      }

      const totalCharacters = chineseCount + englishCount;
      const chinesePercentage = (chineseCount / totalCharacters) * 100;
      const englishPercentage = (englishCount / totalCharacters) * 100;

      if (chinesePercentage > 50) {
        return "chinese"; // 如果中文字符比重大于50%，判断为中文
      } else if (englishPercentage > 50) {
        return "english"; // 如果英文字符比重大于50%，判断为英文
      } else {
        return "mixed"; // 如果中文和英文字符比重都不大于50%，判断为混合文本
      }
    }

    function bing_click(e) {
      const li = e.target.closest('li');
      const el_bing = document.querySelector('.input-wrap');
      if (!li) { return };
      const a = li.querySelector('a');
      const text = a.innerText;
      el_bing.classList.toggle('on');
      if (li.classList.contains("lang")) { return };
      inputText.value = text;
    }

    function input_clean(e) {
      inputText.value = "";
    }

    function input_keydown(e) {
      if (e.keyCode === 27) {
        inputText.value = "";
      }
    }

    function lang_click(e) {
      const el_input = document.querySelector('.input-wrap input');
      const li = e.target.closest('li');
      if (!li) { return };
      const el_lang = li.querySelector('p')
      const text = el_input.value;
      el_input.value = el_lang.innerText;
      el_lang.innerText = text;
      inputText.value = el_lang.innerText;
    }

    function use_click(event) {
      return;
      const el_input = document.querySelector('.input-wrap input');
      const li = event.target.closest('li');
      const a = li.querySelector('a');
      if (!a) { return; }
      const input_text = el_input.value;
      // 替换搜索引擎的关键词
      let url;
      if (input_text === null || input_text === undefined || input_text === '') {
        url = a.dataset.href;
      } else {
        url = a.dataset.search.replace("{s}", input_text);
      }
      //鼠标中键
      if (event.which === 2) {
        console.log('鼠标中键');
        window.open(url, '_blank');
      } else {
        window.open(url);
      }
    }

    function ul_mouseover(e) {
      // console.log(e.target);
      const el_input = document.querySelector('.input-wrap input');
      const el_h4 = document.querySelector('.commonly_used h4');
      const el_input_img = document.querySelector('.input-wrap img');
      const el_input_a = document.querySelector('.input-wrap a');
      if (!el_input) { return; }
      const input_text = el_input.value;

      const li = e.target.closest('li');
      if (!li) { return; }
      const a = li.querySelector('a');
      const p = li.querySelector('p');
      const curimg = a.querySelector('img');

      // 替换搜索引擎的关键词
      let url;
      if (input_text === null || input_text === undefined || input_text === '') {
        url = a.dataset.href;
      } else {
        url = a.dataset.search.replace("{s}", input_text);
      }
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      el_input_img.setAttribute("src", curimg.getAttribute("src"));
      el_input_a.setAttribute("href", url);
      el_h4.innerHTML = `<span style="color:#6edecc;margin:0 4px"> ${p.innerText} </span>搜索`;
    }

    function bing_show(e) {
      const el_name = e.target.tagName;
      if (el_name === 'A' || el_name === 'IMG') {
        el_bing.classList.remove('on');
        return
      }
      const el_bing = document.querySelector('.input-wrap');
      el_bing.classList.add('on');
    }

    function bing_hide(e) {
      const el_bing = document.querySelector('.input-wrap');
      el_bing.classList.remove('on');
    }

    return {
      bing_hide,
      bing_show,
      bing_click,
      getbing,
      lang_click,
      input_clean,
      input_keydown,
      use_click,
      ul_mouseover,
      inputText,
      translatedText,
      suggestions
    };
  },
  components: {
    // bing
  }


}


</script>


<style scoped lang="scss">
#search {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  min-width: 480px;
}


.input-wrap {
  position: relative;
  display: flex;
  height: 56px;
  user-select: none;

  &.on {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.20);

    section {
      background: #444c5b;
      border-radius: 10px;
    }

    .bing {
      visibility: visible;
    }

  }


  section {
    display: flex;
    height: 56px;
    width: 100%;
    position: relative;
    padding: 0px 10px 0px 19px;
    align-items: center;
    border-radius: 63px;
    background: #2C313A;
    // transition: border-radius 0.1s ease;
    z-index: 6;


    // &:hover {
    //   +ul.bing {
    //     visibility: visible;
    //   }
    // }

    input {
      width: 80%;
      background-color: transparent;
      border: none;
      color: #FFF;
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
      outline-style: none;
      line-height: 100%;
      z-index: 6;

      &.bold {
        font-weight: 700;
      }
    }


    p {
      width: 100px;
      height: 100%;
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      justify-content: flex-end;

      a {
        // position: absolute;
        // right: 4px;
        display: flex;
        height: 100%;
        width: 50px;
        justify-content: center;
        align-items: center;
        user-select: none;

        img {
          width: 28px;
          height: 28px;
          user-select: none;
          cursor: pointer;
        }

      }

      span {
        cursor: pointer;

        &:hover {
          svg path {
            stroke: #FFF;
          }
        }

      }

    }


  }



}

.bing {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  background-color: #444c5b;
  top: 36px;
  left: 0;
  z-index: 5;
  border-radius: 0 0 10px 10px;
  padding: 20px 0 0 0;
  visibility: hidden;
  // max-height: 120px;
  overflow: hidden;
  // transition: all 0.2s ease;

  &.on {
    visibility: visible;
  }

  li {
    position: relative;
    display: flex;
    height: 30px;
    padding: 0 20px;
    // transition: all 0.1s ease;
    cursor: pointer;
    user-select: none;
    align-items: center;
    color: rgb(192, 192, 192);

    &.lang {
      font-weight: 600;
      height: 40px;
      // border-bottom: 1px solid #535d6e;
    }

    &:nth-child(2)::before {
      content: '';
      position: absolute;
      width: calc(100% - 40px);
      top: 0;
      border-top: 1px solid #535d6e;
    }

    &:hover {
      color: #fff;
      background-color: #2C313A;

      span {
        opacity: 1;
      }
    }

    a {
      display: flex;
      text-align: left;
      width: 100%;
      text-decoration: none;
      align-items: center;
      justify-content: flex-start;
    }

    span {
      opacity: 0;
      position: absolute;
      right: 15px;
      color: #8E8E8E;

      &:hover {
        color: #ffffff;
      }
    }
  }
}

.commonly_used {
  display: flex;
  padding: 0px 20px;
  align-items: center;
  gap: 36px;
  align-self: stretch;


  h4 {
    text-align: right;
    width: 200px;
    user-select: none;
    color: #8E8E8E;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 30px;
      height: 30px;
      opacity: 0.8;
      cursor: pointer;

      &:hover {
        opacity: 1;

        // background-color: #FFF;
        img {
          transform: scale(1.5);
        }
      }

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;

        img {
          width: 18px;
          height: 18px;
          transition: all 0.3s ease;
        }

        p {
          display: none;
        }
      }
    }

  }
}
</style>
