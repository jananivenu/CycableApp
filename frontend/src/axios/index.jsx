import axios from "axios";

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8000/backend/api"
    : "http://luna-team2.propulsion-learn.ch/backend/api/";

const UserAxios = axios.create({
  baseURL: BASE_URL,
});

// Interceptor for installing an authorization token from localStorage
UserAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default UserAxios;