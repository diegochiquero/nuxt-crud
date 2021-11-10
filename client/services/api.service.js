import axios from 'axios'
const config = require('../config')
const apiPath = '/api'

const apiService = axios.create({
  baseURL: config.api,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  fetchUsers() {
    return apiService.get(`${apiPath}/user`)
  },
  sumUpUser(params) {
    return apiService.post(`${apiPath}/users`, params)
  },
  removeUser(params) {
    return apiService.delete(`${apiPath}/user/${params}`)
  },
  actualize(params) {
    return apiService.put(`${apiPath}/user/${params.user._id}`, params)
  }
}
