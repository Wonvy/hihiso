<template>
  <button @click="fetchNewsData">Fetch News Data</button>
</template>


<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchNewsData = () => {
      store.dispatch('fetchNewsData', 'https://www.zhihu.com/rss'); // 传入具体的 RSS 链接
    };

    return {
      fetchNewsData,
    };
  },
});
</script>
