import { createRouter, createWebHistory } from 'vue-router';
import HomeView                           from '@/views/Home/App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView
    }
  ]
});

export { router };