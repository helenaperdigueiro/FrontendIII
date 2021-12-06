import axios from 'axios';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/'
});

export default api;