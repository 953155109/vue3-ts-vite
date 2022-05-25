/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 15:07:17
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 15:11:23
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '张三',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
