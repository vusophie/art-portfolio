import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './assets/main.css'; // Import custom CSS
import '@mdi/font/css/materialdesignicons.css';

// Set up Vue I18n
const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  },
});

// Set up Vuetify
const vuetify = createVuetify({
  components,
  directives,
});

// Create and mount the app
const app = createApp(App);

app.use(router); // Use Vue Router
app.use(i18n);   // Use Vue I18n
app.use(vuetify); // Use Vuetify
app.mount('#app');
