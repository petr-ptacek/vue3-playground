import { createApp } from 'vue';
import App           from '@/App.vue';
import '@/assets/styles/main.scss';

const app = createApp(App);

// app.config.errorHandler = (err, component, info) => {
//   console.log(`errorHandler`);
//   console.log(err);
//   console.log(component);
//   console.log(info);
// };

app.config.globalProperties = {
  MAGIC_NUMBER: 88
};

app.mount('#app');