import Axios from 'axios';
import toast from 'react-hot-toast';

import { logError } from './logError';

const authFetch = Axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.request.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error('An unexpected error occurred!');
    logError(error);
  }

  return Promise.reject(error);
});

const api = {
  get: authFetch.get,
  post: authFetch.post,
  patch: authFetch.patch,
  delete: authFetch.delete,
};

export default api;
