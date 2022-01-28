import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [
    {
      path: '/',
      redirect: '/components/Button'
    }
  ,{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },{
    title: '头像',
    name: 'Avatar',
    path: '/components/Avatar',
    component: () => import('packages/Avatar/docs/README.md'),
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;