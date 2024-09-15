import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import VueLazyload from 'vue-lazyload'

const app = createApp(App);

app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'error.gif',
  loading: 'loading.gif',
  attempt: 1
})

app.use(store);
app.mount('#app');
