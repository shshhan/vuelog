//라우터 설정
import { createWebHistory, createRouter } from "vue-router";    //impfort ... from 라이브러리명 : 라이브러리를 import
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
// import NotFoundPage from './components/NotFoundPage.vue';


const routes = [
  {
    path: "/detail/:id",    //(\\d+) 숫자만 받는 정규식, 더 많은 정보는 vue-router4 검색해서 찾아보기
    component: Detail,
    children : [
        {
            path : "author",
            component : Author,
        },
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
//   {
//     path: "/:anything(.*)*",
//     component: NotFoundPage,
//   },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 