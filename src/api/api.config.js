import axios from 'axios'

// //axios配置
axios.defaults.method = 'post';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api';
axios.defaults.timeout = 100000;
axios.defaults.responseType = 'json';
