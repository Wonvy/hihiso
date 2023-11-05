// store.js
import { createStore } from 'vuex';

export default createStore({

  state: {
    currentFetchUrl: '', //判断是否重复，防止json读取数据后覆盖源数据
    newsData: [], // 列表
    favorites: [],  // 收藏夹
  },

  mutations: {

    SET_NEWS_DATA(state, data) {
      state.newsData = data;
    },

    SET_FAVORITES_DATA(state, data) {
      state.favorites = data;
    },

    SET_CurrentFetchUrl(state, url) {
      state.currentFetchUrl = url;
    },
  },

  actions: {

    async fetchNewsData({ commit, state }, rssurl) {
      try {

        // 使用缓存数据
        const storedData = localStorage.getItem(rssurl);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const currentTime = new Date().getTime();
          const storedTime = parsedData.timestamp;
          const timeDifference = (currentTime - storedTime) / (1000 * 60); // 时间差（分钟）

          // 如果缓存数据的时间不超过30分钟，则使用缓存数据
          if (timeDifference <= 30) {
            console.log('这是缓存数据', rssurl)
            commit('SET_NEWS_DATA', parsedData.data);
            return parsedData.data;
          }
        }

        console.log('正在获取在线rss')
        // 在线
        const response = await fetch(`http://127.0.0.1:3000/rss?url=${rssurl}`);
        const rssData = await response.json();
        // 检查返回的数据是否是当前请求的数据
        if (rssurl === state.currentFetchUrl) {
          commit('SET_NEWS_DATA', rssData);
          // 保存到缓存数据
          const localdata = { timestamp: new Date().getTime(), data: rssData }
          localStorage.setItem(rssurl, JSON.stringify(localdata));

          return rssData;
        } else {
          console.log(`Fetch result for ${rssurl} is outdated.`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async fetchFavorites({ commit }, apiUrl) {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        commit('SET_FAVORITES_DATA', data);
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
    },

  },
});
