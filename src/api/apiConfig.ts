import { API_URL, LOCAL_STORAGE_KEY } from '@/utils/config'
import axios from 'axios'

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

Axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(LOCAL_STORAGE_KEY.accessToken)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default Axios
