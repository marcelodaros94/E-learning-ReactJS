import axios from "axios";       
import store from '../app/store';
import { logoutSuccess } from '../features/userSlice';

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== process.env.REACT_APP_API+"/api/auth/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
            store.dispatch(logoutSuccess());
            localStorage.removeItem('auth_token');
            alert('Su sesión ha expirado');
        } catch (_error) {
            return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;