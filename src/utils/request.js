// 封装axios实例
import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000
})
