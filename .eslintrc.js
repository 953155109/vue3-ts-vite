/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2022-05-24 14:54:14
 * @LastEditors: EVE
 * @LastEditTime: 2022-05-24 14:57:04
 */
module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
    },
};
