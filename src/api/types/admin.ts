/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-25 09:41:20
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-25 09:59:59
 */
export interface AdminPostData {
    account: string;
    conf_pwd: string;
    pwd: string;
    roles: number[];
    status: number;
    real_name: string;
}
