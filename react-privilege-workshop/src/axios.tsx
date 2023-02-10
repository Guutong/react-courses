import $axios from 'axios';
import { env } from './env';

const httpClient = $axios.create({
  baseURL: env.apiBaseUrl,
});

httpClient.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    resolve(config);
  });
});
export { httpClient };
