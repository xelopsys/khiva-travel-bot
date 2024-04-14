import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.WEB_API_URL,
});

export default axiosInstance;
