// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    newsData: [],
  },
  mutations: {
    SET_NEWS_DATA(state, data) {
      state.newsData = data;
    },
    SET_FAVORITES_DATA(state, data) {
      state.favorites = data;
    },
  },
  actions: {
    async fetchNewsData({ commit }, rssurl) {
      try {
        const response = await fetch(`http://127.0.0.1:3000/rss?url=${rssurl}`);
        const rssData = await response.json();
        // console.log('rssData', rssData);
        // commit('SET_NEWS_DATA', rssData.items);
        // return rssData.items;
        commit('SET_NEWS_DATA', rssData);
        return rssData;
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
