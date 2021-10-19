import {
  createRouter,
  createWebHistory,
  RouterOptions,
  RouteRecordRaw
}                               from 'vue-router';
import Home                     from '@/views/Home.vue';

enum RouteNames {
  home = 'home',
  users = 'users',
  user = 'user',
  notFound = 'notFound'
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
    component: () => import('@/views/Users.vue'),
    meta: {
      label: 'Users'
    }
  },
  {
    name: RouteNames.notFound,
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')

  }
  // {
  //   name: RouteNames.users,
  //   path: '/users/:id',
  //   component: defineAsyncComponent(
  //     () => import('@/components/User.vue')
  //   ),
  //   meta: {
  //     label: 'User'
  //   }
  // }
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  strict: !import.meta.env.PROD,
  routes
};

const router = createRouter(routerOptions);

export {
  router,
  RouteNames
};
export default router;