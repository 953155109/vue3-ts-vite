<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2022-05-25 09:51:17
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 11:05:24
-->
<script setup lang="ts">
import { ref } from 'vue';
import { createAdmin } from '@/api/admin';
import { useUserStore } from '@/store/user';

const store = useUserStore();
const changeStore = (item: string) => {
    store.updateName(item);
};

const list = ref();
const requestData = async () => {
    const data = {
        account: 'string',
        conf_pwd: 'string',
        pwd: 'string',
        roles: [1, 2, 3],
        status: 1,
        real_name: 'string',
    };
    const result = await createAdmin(data);
    console.log(result, list);
};
</script>

<template>
    <h2>{{ store.name }}</h2>
    <h3 @click="changeStore('李四')">点击</h3>
    <h4 @click="requestData()">请求</h4>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
</template>

<style scoped></style>
