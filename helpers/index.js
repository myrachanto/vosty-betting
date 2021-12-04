import axios from 'axios'

// export const host = 'https://mysite.nillavee.co.ke'
export const host = 'http://localhost:2000'

export const http = axios.create({
  baseURL: host,
  timeout: 20000
  // headers: { Authorization: `Bearer ${token}` }
})