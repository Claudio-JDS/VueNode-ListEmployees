import axios, { type AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'aplication/json' },
  timeout: 3000,
})

export default http