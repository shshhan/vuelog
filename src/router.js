//라우터 설정
import { createWebHistory, createRouter } from "vue-router";    //impfort ... from 라이브러리명 : 라이브러리를 import
import List from './components/List.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 