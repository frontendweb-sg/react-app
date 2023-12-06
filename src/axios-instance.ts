import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance as http };
