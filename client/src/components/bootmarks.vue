<template>
  <div class="bootmarks" @mouseover="ul_mouseover">
    <section v-for="(category, index) in categories" :key="index">
      <h3><i class="iconfont">{{ category.icon }}</i>{{ category.category }}</h3>
      <ul class="love">
        <li v-for="(website, websiteIndex) in category.websites.slice(0, 3)" :key="websiteIndex">
          <a :data-href="website.url" :data-search="website.searchUrl">
            <img :src="website.iconUrl" alt="website.name">
            <p>{{ website.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="all">
        <li v-for="(website, websiteIndex) in category.websites.slice(3)" :key="websiteIndex">
          <a target="_blank" :data-href="website.url" :data-search="website.searchUrl">
            <img :src="website.iconUrl" alt="website.name">
            <p>{{ website.name }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>


<script>

import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const newsData = computed(() => store.state.newsData);
    const categories = computed(() => store.state.favorites);

    function ul_mouseover(e) {
      const el_input = document.querySelector('.input-wrap input');
      const el_h4 = document.querySelector('.commonly_used h4');
      const el_input_img = document.querySelector('.input-wrap img');
      const el_input_a = document.querySelector('.input-wrap a');
      if (!el_input) { return; }
      const input_text = el_input.value;

      if (e.target.tagName === "A") { return };
      const li = e.target.closest('li');
      if (!li) { return; }
      const a = li.querySelector('a');
      const p = li.querySelector('p');
      const curimg = a.querySelector('img');

      store.dispatch('fetchNewsData', a.dataset.search);

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


    onMounted(() => {
      store.dispatch('fetchFavorites', '/json/websites.json');
    });

    return {
      categories,
      ul_mouseover
    };
  }
};
</script>

<style scoped lang="scss">
.bootmarks {
  // padding: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
  position: relative;
  row-gap: 35px;
  height: 60%;
  margin: 0 auto;
  overflow-y: auto;
  justify-items: center;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2e343f;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(66, 79, 100);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4f5a6f;
  }

  section {
    position: relative;
    width: 200px;
    height: 150px;
    transition: all 0.2s ease;
    background-color: transparent;
    padding: 0;
    border-radius: 8px 8px 0 0;

    &:hover {
      z-index: 10;
      background-color: #2c313a;

      h3 {
        color: #6edecc;
      }

      .all {
        padding: 0 10px 10px 10px;
        opacity: 1;
        height: auto;
        background-color: #2c313a;
      }

    }

    h3 {
      font-size: 16px;
      width: 100%;
      color: #6edecc;
      font-weight: bold;
      // background-color: rgb(85, 80, 73);
      line-height: 40px;
      height: 40px;
      padding-left: 16px;
      border-radius: 8px 8px 0 0;
      // margin-bottom: 10px;
    }

    li {
      width: 100%;
      height: 34px;
      display: flex;


      a {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 10px;
        column-gap: 8px;
        align-items: center;
        justify-content: center;
        user-select: none;
        color: #999;
        text-decoration: none;
        transition: all 0.2s ease;
        border-radius: 4px;

        &:hover {
          color: #56decc;
          background-color: #121615;

          p {
            // font-size: 15px;
            font-weight: bold;
          }
        }

        img {
          width: 18px;
          height: 18px;
        }

        p {
          font-size: 14px;
          width: 100%;
          text-align: left;
          // transition: all 0.1s ease;
        }
      }
    }

    .love {
      padding: 0 10px 0 10px;
      width: 100%;
    }

    .all {
      padding: 0;
      border-radius: 0 0 8px 8px;
      height: 0;
      max-height: 300px;
      background-color: transparent;
      overflow-y: auto;
      transition: background-color 0.2s ease;
      z-index: 9;
    }



  }
}
</style>
