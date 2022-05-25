/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 14:43:27
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 15:05:17
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
