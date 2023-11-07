<template>
  <!-- <h1>111</h1> -->

  <ul class="baidu">
    <li v-for="suggestion in suggestions" :key="suggestion.url">
      <a :data-href="suggestion.url" target="_blank">{{ suggestion.text }}</a>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import cheerio from 'cheerio';

export default {
  data() {
    return {
      suggestions: []
    };
  },
  props: {
    searchTerm: String // 定义 searchTerm 为 props，接收父组件传递的值
  },
  watch: {
    searchTerm: {
      immediate: true, // 立即触发一次
      handler(newValue) {
        this.getbing(newValue);
      }
    }
  },

  methods: {
    getbing(searchTerm) {
      fetch(`http://127.0.0.1:3000/bing?url=${searchTerm}`)
        .then(response => response.text()) // 使用text()方法解析文本响应
        .then(data => {
          const suggestions = this.parseHTML(data);
          this.suggestions = suggestions;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },

    generateCvid() {
      const characters = '0123456789ABCDEF';
      let cvid = '';
      for (let i = 0; i < 32; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        cvid += characters[randomIndex];
      }
      return cvid;
    },
    parseHTML(htmlString) {
      console.log(htmlString);
      // 使用cheerio解析HTML字符串并提取url和文本
      const $ = cheerio.load(htmlString);
      const suggestions = [htmlString];

      $('.sa_sg').each((index, element) => {
        const url = $(element).attr('url');
        const text = $(element).find('.sa_tm_text').text();
        suggestions.push({ url, text });
      });

      return suggestions;
    }
  }
};
</script>

<style scoped lang="scss">
.baidu {
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  position: absolute;
  background-color: #444c5b;
  top: 58px;
  left: 10px;
  z-index: 5;
  border-radius: 5px;
  padding: 0px;

  li {
    height: 26px;
    padding: 0 10px;
    transition: all 0.1s ease;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #2C313A;
    }

    a {
      color: aliceblue;
      text-decoration: none;
    }
  }
}
</style>
