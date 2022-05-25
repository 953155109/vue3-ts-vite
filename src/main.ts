/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 14:43:27
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 11:04:42
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount('#app');
