import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true,
});

export const signup = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
