import axios from 'axios'

export const storeInstance = axios.create({
  baseURL: import.meta.env.VITE_STORE_BASE_URL,
})
