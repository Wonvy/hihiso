<template>
  <div class="bootmarks">
    <section v-for="(category, index) in categories" :key="index">
      <h3><i class="iconfont">{{ category.icon }}</i>{{ category.category }}</h3>

      <ul class="love">
        <li v-for="(website, websiteIndex) in category.websites.slice(0, 3)" :key="websiteIndex">
          <a target="_blank" :href="website.url" :data-search="website.searchUrl">
            <img :src="website.iconUrl" alt="website.name">
            <p>{{ website.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="all">
        <li v-for="(website, websiteIndex) in category.websites.slice(3)" :key="websiteIndex">
          <a target="_blank" :href="website.url" :data-search="website.searchUrl">
            <img :src="website.iconUrl" alt="website.name">
            <p>{{ website.name }}</p>
          </a>
        </li>
      </ul>


    </section>
  </div>
</template>


<script>

import { ref, onMounted } from 'vue';

export default {
  setup() {
    const categories = ref([]);
    function fetchData(apiUrl) {
      // 异步获取JSON数据
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          categories.value = data;
        })
        .catch(error => {
          console.error('Error fetching JSON data: ', error);
        });
    }

    onMounted(() => {
      fetchData('/json/websites.json');
    });

    return {
      categories,
      fetchData
    };
  }
};
</script>

<style scoped lang="scss">
.bootmarks {
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
  position: relative;
  row-gap: 35px;
  height: 70%;
  margin: 0 auto;
  overflow-y: auto;
  justify-items: center;

  section {
    position: relative;
    width: 180px;
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
          color: #fff;
          background-color: #424f64;

          p {
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
