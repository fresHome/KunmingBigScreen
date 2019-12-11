import axios from 'axios'

// //axios配置
axios.defaults.method = 'post';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api/',  // 接口域名
axios.defaults.timeout = 600000;
axios.defaults.responseType = 'json';
