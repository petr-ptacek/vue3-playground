import {
  createRouter,
  createWebHistory, RouteLocationNormalized,
  RouteRecordRaw,
  RouterOptions
}           from 'vue-router';
import Home from '@/views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    props: (route: RouteLocationNormalized) => {
      return {
        ...route.params,
        id: parseInt(route.params.id as string, 10)
      };
    },
    component: () => import('@/views/DestinationShow.vue')
  }
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes,
  linkActiveClass: 'vue-school-active-link'
};

const router = createRouter(routerOptions);

export default router;