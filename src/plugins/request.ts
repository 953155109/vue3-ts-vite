/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-25 09:20:00
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 09:49:29
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
const request = axios.create();

request.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);

request.interceptors.response.use(
    async (response: AxiosResponse) => {
        console.log(response);
    },
    (error: any) => {
        return Promise.reject(error);
    },
);
export default request;
