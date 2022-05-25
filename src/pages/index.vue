<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2022-05-24 16:49:48
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 16:57:25
-->
<template>
    <img alt="Vue logo" src="./../assets/logo.png" />
    <!-- <UsePinia /> -->
    <br />
    <router-link to="/login">点击跳转至login</router-link>
    <br /><br />
    <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
    <br /><br />
    <router-link to="/request">点击跳转至request请求页面</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import UsePinia from '@/components/UsePinia.vue';
export default defineComponent({
    name: 'IndexPage',
    // components: {
    //     UsePinia,
    // },
});
</script>
