// src/api/index.js
import axios from 'axios';

// Set baseURL from VITE_API_URL or fallback to localhost
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true, //  using cookies/session auth
});

// Auth API calls
export const signup = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
