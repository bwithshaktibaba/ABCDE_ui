import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // your backend URL
});

export const signup = (userData) => api.post('/users', userData);
export const login = (credentials) => api.post('/users/login', credentials);
export const getItems = () => api.get('/items');
export const addToCart = (token, itemId) => api.post('/carts', { item_id: itemId }, { headers: { Authorization: `Bearer ${token}` } });
export const checkout = (token) => api.post('/orders', {}, { headers: { Authorization: `Bearer ${token}` } });
export const getCart = (token) => api.get('/carts', { headers: { Authorization: `Bearer ${token}` } });
export const getOrders = (token) => api.get('/orders', { headers: { Authorization: `Bearer ${token}` } });

export default api;
