import Index from '../pages/index/index.vue';
import Vite from '../pages/vite/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/vite',
    name: 'Vite',
    component: Vite
  },
];

export default createRouter({
  history: createWebHashHistory('/vue3'),
  routes,
});
