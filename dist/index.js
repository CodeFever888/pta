"use strict";
const dotenv = require('dotenv');
dotenv.config(); // 加载 .env 文件中的环境变量
const url1 = 'https://passport.pintia.cn/api/users/sessions';
const url2 = 'https://pintia.cn/api/problem-sets';
const data = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    rememberMe: "false"
};
const headers = {
    'accept': 'application/json;charset=UTF-8',
    'accept-language': 'zh-CN',
    'cookie': 'PTASession=8c0b4451-5b28-49db-af47-c8ce6607f40b',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'Content-Type': 'application/json'
};
fetch(url1, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    .then(result => {
    console.log(JSON.stringify(result, null, 2));
});
fetch(url2, {
    method: 'GET',
    headers: headers
})
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    .then(result => {
    console.log(result);
});
