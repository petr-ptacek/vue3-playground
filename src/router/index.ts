import {
  createRouter,
  createWebHistory, RouteLocationNormalized,
  RouteRecordRaw,
  RouterOptions
}                 from 'vue-router';
import Home       from '@/views/Home.vue';
import sourceData from '@/assets/data.json';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route: RouteLocationNormalized) => {
      return {
        ...route.params,
        id: parseInt(route.params.id as string, 10)
      };
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: (route: RouteLocationNormalized) => {

          return {
            id: parseInt(route.params.id as string, 10),
            experienceSlug: route.params.experienceSlug
          };
        }
      }
    ],
    beforeEnter(to: RouteLocationNormalized, _from: RouteLocationNormalized) {
      const exist = sourceData.destinations.find(destination => {
        return destination.id === parseInt(to.params.id as string, 10);
      });

      if ( !exist ) {
        return {
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash
        };
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes,
  linkActiveClass: 'vue-school-active-link',
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || new Promise(resolve => {
      setTimeout(
        () => {
          resolve({ top: 0, behavior: 'smooth' });
        },
        300
      );
    });
    // return { top: null, left: null, behavior: null }
  }
};

const router = createRouter(routerOptions);

export default router;