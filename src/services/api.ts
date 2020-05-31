import axios from 'axios';
require("dotenv").config();

const api = axios.create({
  baseURL: 'https://nodefarm-backend.herokuapp.com/'
});

export default api;
