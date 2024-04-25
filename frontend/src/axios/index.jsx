import axios from 'axios'

// const BASE_URL =
//   window.location.hostname === 'localhost'
//     ? 'http://localhost:8000/backend/api/'
//     : 'https://cycable.propulsion-learn.ch/backend/api/'

const BASE_URL = 'https://cycable.propulsion-learn.ch/backend/api/'

const UserAxios = axios.create({
  baseURL: BASE_URL,
})

export const UserRegistration = axios.create({
  baseURL: BASE_URL,
})

// Interceptor for installing an authorization token from localStorage
UserAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default UserAxios
