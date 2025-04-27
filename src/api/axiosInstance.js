// src/api/axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance // ✅ ต้องมีบรรทัดนี้
