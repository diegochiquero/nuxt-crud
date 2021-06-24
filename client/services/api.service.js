import axios from 'axios'
import { API_URL } from '@/services/config'

const apiService = axios.create({
  baseURL: API_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  fetchUsers() {
    return apiService.get('/user')
  },
  sumUpUser(params) {
    return apiService.post('/users', params)
  },
  removeUser(params) {
    return apiService.delete(`/user/${params}`)
  },
  actualize(params) {
    return apiService.put(`/user/${params.user._id}`, params)
  }
}
