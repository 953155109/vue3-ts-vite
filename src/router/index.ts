/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 16:26:10
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 10:53:01
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/login.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/index.vue'),
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: '使用页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/vueUse.vue'),
    },
    {
        path: '/vueRequest',
        name: 'VueRequest',
        meta: {
            title: '请求页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/vueRequest.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
