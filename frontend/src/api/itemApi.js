import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

console.log("API Base URL:", API_URL);

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Add response interceptor for better error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout - backend not responding");
    } else if (error.code === "ERR_NETWORK") {
      console.error("Network error - cannot reach backend at:", API_URL);
    }
    return Promise.reject(error);
  }
);

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;