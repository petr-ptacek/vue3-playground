import {
  createRouter,
  createWebHistory,
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
    path: '/brazil',
    name: 'Brazil',
    component: () => import('@/views/Brazil.vue')
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import('@/views/Hawaii.vue')
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import('@/views/Jamaica.vue')
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import('@/views/Panama.vue')
  },
  {
    path: '/destination/:id',
    name: 'DestinationShow',
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