import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
  },
  {
    path: '/vue3',
    component: () => import('../App.vue'),
  },
  {
    path: '/react18',
    component: () => import('../App.vue'),
  },
];

const router = (basename = '') => createRouter({
  history: createWebHistory(basename),
  routes,
});

export default router;
