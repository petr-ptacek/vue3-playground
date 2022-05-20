import { createApp } from 'vue';
import '@/assets/styles/index.css';
import { router }    from '@/router';
import App           from '@/App.vue';

const app = createApp(App);

app.use(router)

app.mount('#app');