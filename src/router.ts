import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/components/Button'
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'), // 将文档以Vue组件的形式展示
  }
];

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig);

export default router;