<template>
  <div class="zcool">
    <div class="header">
      <!-- <button @click="fetchData('/json/zcool.json')">Fetch Data</button> -->
      <div class="title" :data-url="newsData.link">
        <img
          src="https://s3-alpha-sig.figma.com/img/5465/6d96/aa64daa56987c335ad15ca17f3304a3c?Expires=1699833600&Signature=htceRnZ7Ku1JHFIRbm6iPWtUMvFRHz4BLXabPplOAq5~naTFruP9K6uSkuCMsVrO4eWp3Qlfgr8tKO5JFe5zz6zlbOfjSwrI0Fmu-T1iLnMob96x81BPtCQFGVs~pR5YBgWAtpCuMUf9CYEI8oY750MrQ3SABklvJ2arZaeLkgvbrqZHojBugdsH86prb7bO-4AHZh2M0W3~O4GsNFSCMpjekwhlXHkbZHmVJ2OyYf0x~GFRPQSF9H3CYKubBUbO1tn-u-cCHz32e1tkTw77khdeoqgOL~hmUIqRWqquv5jS~JxYkpSRK5lnpzX74iPgLBaYBf9pEwPBOAYRNTW9gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="">
        <a :href="newsData.link" target="_blank">
          <h2>{{ newsData.title }}</h2>
        </a>

      </div>
      <div class="view">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M1 1H10.2174V9H1V1Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M1 13H10.2174V21H1V13Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M13.8696 1H23V9H13.8696V1Z" stroke="#5A6B8A" stroke-linejoin="round" />
          <path d="M13.8696 13H23V21H13.8696V13Z" stroke="#5A6B8A" stroke-linejoin="round" />
        </svg>

        <ul class="popup">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12.5 3C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H7.5C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3H12.5Z"
                fill="black" />
              <path
                d="M12.5 6C12.7761 6 13 6.22386 13 6.5C13 6.77614 12.7761 7 12.5 7H7.5C7.22386 7 7 6.77614 7 6.5C7 6.22386 7.22386 6 7.5 6H12.5Z"
                fill="black" />
              <path
                d="M13 9.5C13 9.22386 12.7761 9 12.5 9H7.5C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10H12.5C12.7761 10 13 9.77614 13 9.5Z"
                fill="black" />
              <path
                d="M12.5 12C12.7761 12 13 12.2239 13 12.5C13 12.7761 12.7761 13 12.5 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H12.5Z"
                fill="black" />
              <path
                d="M16 2C16 0.895431 15.1046 0 14 0H2C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2ZM4 1V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1H4ZM5 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H5V1Z"
                fill="black" />
            </svg>
            <span>列表</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path
                d="M3 1V3H1V1H3ZM4 8V6C4 5.44772 3.55228 5 3 5H1C0.447715 5 0 5.44772 0 6V8C0 8.55228 0.447715 9 1 9H3C3.55228 9 4 8.55228 4 8ZM4 3V1C4 0.447715 3.55228 0 3 0H1C0.447715 0 0 0.447715 0 1V3C0 3.55228 0.447715 4 1 4H3C3.55228 4 4 3.55228 4 3ZM9 8V6C9 5.44772 8.55228 5 8 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8ZM9 3V1C9 0.447715 8.55228 0 8 0H6C5.44772 0 5 0.447715 5 1V3C5 3.55228 5.44772 4 6 4H8C8.55228 4 9 3.55228 9 3ZM8 1V3H6V1H8ZM13 1H11V3H13V1ZM3 6V8H1V6H3ZM8 6V8H6V6H8ZM13 6V8H11V6H13ZM10 1C10 0.447715 10.4477 0 11 0H13C13.5523 0 14 0.447715 14 1V3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3V1ZM11 5C10.4477 5 10 5.44772 10 6V8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8V6C14 5.44772 13.5523 5 13 5H11Z"
                fill="black" />
            </svg>
            <span>图片</span>
          </li>
          <li>详细信息</li>
        </ul>

      </div>

    </div>
    <div class="list-wrap">
      <ul @wheel="handleScroll">
        <li v-for="(item, index) in  newsData.items " :key="index" :data-url="item.link" @click="handleItemClick(item)">
          <a :href=item.link target="_blank">
            <div class="img-wrap">
              <!-- <img :src="extractFirstImageUrl(item.content)" alt="Image" /> -->
            </div>
            <div class="detail">
              <h3>{{ item.title }}</h3>
              <p>{{ item.contentSnippet }}</p>
              <i>{{ formatDateTime(item.pubDate) }}</i>
            </div>
          </a>

        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="prev" @click="scrollUp">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
          <path d="M12.5 21.5L1.5 11L12.5 0.500001" stroke="#ACADAF" stroke-linecap="round" />
        </svg>
      </div>
      <div class="next" @click="scrollDown">
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
    const jsonData = ref([]);
    const listRef = ref(null);
    const store = useStore();
    const newsData = computed(() => store.state.newsData);

    // 获取第一张图片
    function extractFirstImageUrl(htmlCode) {
      var imgRegex = /<img.*?src=['"](.*?)['"].*?>/i;
      var match = htmlCode.match(imgRegex);
      if (match && match.length > 1) {
        let imgurl = match[1]
        // imgurl = imgurl.replace(/\.(webp|jpeg|jpg|gif)(\?.*)?$/i, '');
        console.log(typeof (imgurl), imgurl);
        return imgurl;
      } else {
        console.log('null', htmlCode);
        return null;
      }
    }

    function formatDateTime(dateString) {
      const targetDate = new Date(dateString);
      const currentDate = new Date();
      const timeDifference = currentDate - targetDate;

      const minutes = Math.floor(timeDifference / (1000 * 60));
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (minutes < 1) {
        return '1分钟前';
      } else if (hours < 1) {
        return `${minutes}分钟前`;
      } else if (hours < 12) {
        return `${hours}小时前`;
      } else {
        const formattedYear = targetDate.getFullYear();
        const formattedMonth = (targetDate.getMonth() + 1).toString().padStart(2, '0');
        const formattedDay = targetDate.getDate().toString().padStart(2, '0');
        const formattedHours = targetDate.getHours().toString().padStart(2, '0');
        const formattedMinutes = targetDate.getMinutes().toString().padStart(2, '0');
        return `${formattedYear}年${formattedMonth}月${formattedDay}日 ${formattedHours}:${formattedMinutes}`;
      }
    }

    function fetchData(apiUrl) {
      // 异步获取JSON数据
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          jsonData.value = data;
        })
        .catch(error => {
          console.error('Error fetching JSON data: ', error);
        });

      // listRef.value = document.querySelector('.zcool .list-wrap ul');
    }

    onMounted(() => {
      // fetchData('/json/zcool.json');
      store.dispatch('fetchNewsData', 'https://v2ex.com/index.xml'); // 初始化

    });

    function handleScroll(event) {
      // 处理滚轮事件，根据滚轮方向判断向上或向下滚动
      // console.log(event.target);
      const el_ul = event.target.closest("ul");
      if (!el_ul) { return };
      const firstLi = el_ul.querySelector('li');


      // const remainingScroll = el_ul.clientHeight;
      const remainingScroll = firstLi.clientHeight * 4;
      if (event.deltaY > 0 && remainingScroll > 0) {
        // 向下滚动
        el_ul.scrollTo({
          top: el_ul.scrollTop + remainingScroll,
          behavior: 'smooth'
        });
      } else if (event.deltaY < 0 && el_ul.scrollTop > 0) {
        // 向上滚动
        el_ul.scrollTo({
          top: el_ul.scrollTop - el_ul.clientHeight,
          behavior: 'smooth'
        });
      }
    }

    function scrollDown(event) {
      const el_ul = document.querySelector('.zcool .list-wrap ul');
      if (!el_ul) { return };
      const firstLi = el_ul.querySelector('li');
      // 向下滚动
      const remainingScroll = firstLi.clientHeight * 4;
      el_ul.scrollTo({
        top: el_ul.scrollTop + remainingScroll,
        behavior: 'smooth'
      });
    }

    function scrollUp(event) {
      const el_ul = document.querySelector('.zcool .list-wrap ul');
      if (!el_ul) { return };
      // 向上滚动
      el_ul.scrollTo({
        top: el_ul.scrollTop - el_ul.clientHeight,
        behavior: 'smooth'
      });
    }

    function handleItemClick(item) {
      return;
      window.open(item.href, '_blank');
    }

    return {
      jsonData,
      newsData,
      handleScroll,
      scrollUp,
      scrollDown,
      handleItemClick,
      fetchData,
      formatDateTime,
      extractFirstImageUrl,
    };
  }
};

</script>

<style scoped lang="scss">
div.zcool {
  box-sizing: border-box;
  // max-width: 420px;
  height: 100%;
  padding-top: 25px;
  // padding: 8px;
  overflow: hidden;
  background-color: #2e343f;
  // border-radius: 8px;
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
  border-bottom: 1px solid #4a5970;

  img {
    width: 18px;
    height: 18px;
  }

  h2 {
    color: #CECECE;
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
        padding: 0;
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
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
    width: 100%;
    height: 100%;
    overflow-y: auto;

    @media (max-width: 700px) {
      grid-template-columns: repeat(auto-fill, calc(50% - 25px));
    }

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

    li {
      overflow: hidden;
      display: flex;
      row-gap: 8px;
      flex-direction: column;
      border-radius: 5px;
      background-color: transparent;
      align-content: start;
      // padding: 0 10px;
      padding-bottom: 12px;
      // transition: background-color 0.15s ease;
      cursor: pointer;
      border-bottom: 1px solid #4b596e;
      height: 140px;
      align-items: left;
      justify-content: center;
      user-select: none;

      &:hover {
        background-color: #191d22;

        img {
          // transform: scale(1.12);
        }
      }



      a {
        display: flex;
        flex-direction: row;
        row-gap: 5px;
        user-select: none;
        padding: 14px 20px 0 12px;
        text-decoration: none;
        height: 100%;
        color: #999;

        .img-wrap {
          width: 110px;
          height: auto;
          overflow: hidden;

          img {
            width: 100%;
            height: auto;
            object-fit: fill;
            border-radius: 10px;
            // transition: transform 0.3s ease;
          }

        }


        .detail {
          position: relative;
          padding-left: 20px;
          width: calc(100% - 100px);

          h3 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.4;
            color: #fff;
            margin-bottom: 6px;
          }

          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 14px;
            color: #9ca7ba;
          }

          i {
            position: absolute;
            bottom: 0;
            right: 0;
            padding-right: 12px;
            text-align: right;
            font-size: 12px;
            font-style: normal;
            color: #6b7b98;
          }
        }
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
