/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 14:43:27
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 16:52:20
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
