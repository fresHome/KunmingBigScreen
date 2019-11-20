import axios from 'axios'

// //axios配置
axios.defaults.method = 'post';
axios.defaults.baseURL = '/api/';
axios.defaults.timeout = 600000;
axios.defaults.responseType = 'json';
