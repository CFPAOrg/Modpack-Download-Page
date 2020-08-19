import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Download from '@/views/Download.vue';
import Detail from '@/views/Detail.vue';
import Readme from '@/views/Detail/Readme';
import Files from '@/views/Detail/Files';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/download',
    name: 'Download',
    component: Download,
    meta: {
      title: '整合包列表'
    }
  },
  {
    path: '/download/:id',
    component: Detail,
    children: [
      {path: '/', name: 'Readme', component: Readme},
      {path: 'files', name: 'Files', component: Files}
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - CFPAOrg整合包汉化下载';
  }
  next();
});

export default router;
