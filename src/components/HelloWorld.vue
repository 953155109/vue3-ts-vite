<!--
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2022-05-24 14:43:27
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 16:23:49
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
const store = useUserStore();
defineProps<{ msg: string }>();
const changeStore = (item: string) => {
    store.updateName(item);
};
const count = ref(0);
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ store.name }}</h2>
    <h3 @click="changeStore('李四')">点击</h3>
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
