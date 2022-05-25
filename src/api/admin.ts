/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-25 09:40:39
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 10:38:58
 */
import request from '@/plugins/request';
import { AdminPostData } from './types/admin';
// 例子
export const createAdmin = (data: AdminPostData) => {
    return request({
        method: 'POST',
        url: '/setting/admin',
        data,
    });
};
