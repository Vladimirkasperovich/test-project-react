import axios from 'axios'

export const geoInstance = axios.create({
  baseURL: import.meta.env.VITE_GEO_API_URL,
})
