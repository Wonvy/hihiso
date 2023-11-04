<!-- <template>
  <div class="news-list">
    <h2>{{ newsData.title }}</h2>
    <ul>
      <li v-for="(item, index) in newsData" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.contentSnippet }}</p>
        <p>作者: {{ item.creator }}</p>
        <p>发布时间: {{ item.isoDate }}</p>
        <a :href="item.link" target="_blank">阅读全文</a>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div class="zcool">
    <div class="header">
      <!-- <button @click="fetchData('/json/zcool.json')">Fetch Data</button> -->
      <div class="title" data-url="www.zcool.comn.cn">
        <img
          src="https://s3-alpha-sig.figma.com/img/5465/6d96/aa64daa56987c335ad15ca17f3304a3c?Expires=1699833600&Signature=htceRnZ7Ku1JHFIRbm6iPWtUMvFRHz4BLXabPplOAq5~naTFruP9K6uSkuCMsVrO4eWp3Qlfgr8tKO5JFe5zz6zlbOfjSwrI0Fmu-T1iLnMob96x81BPtCQFGVs~pR5YBgWAtpCuMUf9CYEI8oY750MrQ3SABklvJ2arZaeLkgvbrqZHojBugdsH86prb7bO-4AHZh2M0W3~O4GsNFSCMpjekwhlXHkbZHmVJ2OyYf0x~GFRPQSF9H3CYKubBUbO1tn-u-cCHz32e1tkTw77khdeoqgOL~hmUIqRWqquv5jS~JxYkpSRK5lnpzX74iPgLBaYBf9pEwPBOAYRNTW9gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="">
        <h2>>{{ newsData.title }}</h2>

      </div>
      <div class="view">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M1 1H10.2174V9H1V1Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M1 13H10.2174V21H1V13Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M13.8696 1H23V9H13.8696V1Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M13.8696 13H23V21H13.8696V13Z" stroke="#5A6B8A" stroke-linejoin="round" />
        </svg>

        <ul class="popup">
          <li>列表</li>
          <li>图片</li>
          <li>详细信息</li>
        </ul>

      </div>

    </div>
    <div class="list-wrap">
      <ul>
        <li v-for="(item, index) in newsData.items" :key="index" :data-url="item.href">
          <div class="img-wrap">
            <img :src="item.img" alt="Image" />
          </div>

          <h3>{{ item.title }}</h3>

        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
          <path d="M12.5 21.5L1.5 11L12.5 0.500001" stroke="#ACADAF" stroke-linecap="round" />
        </svg>
      </div>
      <div class="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
          <path d="M0.5 0.5L11.5 11L0.5 21.5" stroke="#ACADAF" stroke-linecap="round" />
        </svg>
      </div>

    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const newsData = computed(() => store.state.newsData);

    // 在组件加载时触发获取新闻数据的动作
    onMounted(() => {
      store.dispatch('fetchNewsData', 'https://www.zhihu.com/rss');
    });

    return {
      newsData,
    };
  },
};
</script>


<style scoped lang="scss">
div.zcool {
  box-sizing: border-box;
  max-width: 420px;
  height: 100%;
  overflow: hidden;
  background-color: #2e343f;
  border-radius: 8px;
}

.header {
  display: flex;
  height: 46px;
  position: relative;
  padding-left: 15px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-bottom: 1px solid #5a6b8a;

  img {
    width: 18px;
    height: 18px;
  }

  h2 {
    color: #CECECE;
    font-family: Roboto Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .title {
    flex: 1 0 0;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .view {
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #424e63;

      svg path {
        stroke-width: 1px;
        stroke: #7a8db1;
      }

      ul.popup {
        // z-index: 5;

        height: auto;
        // opacity: 0;
      }
    }

    ul.popup {
      position: absolute;
      display: flex;
      width: 120px;
      height: 0;
      top: 46px;
      right: 0;
      z-index: 5;
      background-color: #424e63;
      transition: all 0.3s ease;
      overflow: hidden;
      flex-direction: column;

      li {
        width: 100%;
        height: 30px;

        &:hover {
          background-color: #6c7d9c;
        }
      }

    }
  }




}




.footer {
  display: flex;
  height: 46px;
  background-color: #323a49;
  flex-direction: row;

  .prev,
  .next {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #424f64;

    }
  }


}



.list-wrap {
  width: 100%;
  height: calc(100% - 46px*2);

  ul {
    list-style: none;
    padding: 10px;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(calc(50% - 25px), 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    row-gap: 10px;
    column-gap: 5px;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    /* 隐藏默认滚动条 */
    /* Hide the default scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }

    /* Track (滚动条的背景) */
    &::-webkit-scrollbar-track {
      background: #2e343f;
      cursor: pointer;
    }

    /* Handle (滚动条上的拖动手柄) */
    &::-webkit-scrollbar-thumb {
      background: rgb(66, 79, 100);
      border-radius: 4px;
    }

    /* Handle on hover (鼠标悬停时的滚动条拖动手柄) */
    &::-webkit-scrollbar-thumb:hover {
      background: #4f5a6f;
    }


    li {
      overflow: hidden;
      display: flex;
      row-gap: 8px;
      flex-direction: column;
      border-radius: 5px;
      background-color: transparent;
      align-content: start;
      padding: 5px;
      transition: all 0.15s ease;
      cursor: pointer;
      height: 200px;

      &:hover {
        background-color: #4f5a6f;

        img {
          transform: scale(1.12);
        }
      }

      .img-wrap {
        border-radius: 5px;
        overflow: hidden;

        img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

      }

      h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Roboto Mono;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: #d9d9d9;
      }
    }
  }
}

@media (max-width: 300px) {
  ul {
    grid-template-columns: 1fr;
    padding: 5px;
  }
}
</style>
