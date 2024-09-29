import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locales/en.json';

Vue.use(VueI18n);
const messages = {
  en: en
};
const i18n = new VueI18n({
  locale: 'en',
  messages
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
;