import {
  createRouter,
  createWebHistory,
  RouterOptions,
  RouteRecordRaw
}                               from 'vue-router';
import Home                     from '@/views/Home.vue';
import { defineAsyncComponent } from 'vue';

enum RouteNames {
  home = 'home',
  users = 'users'
}

const routes: RouteRecordRaw[] = [
  {
    name: RouteNames.home,
    path: '/',
    component: Home,
    meta: {
      label: 'Home'
    }
  },
  {
    name: RouteNames.users,
    path: '/users',
    component: defineAsyncComponent(
      () => import('@/views/Users.vue')
    ),
    meta: {
      label: 'Users'
    }
  }
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  strict: !import.meta.env.PROD,
  routes
};

const router = createRouter(routerOptions);

export {
  router,
  routes,
  RouteNames
};
export default router;