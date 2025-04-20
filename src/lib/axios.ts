import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "application/json",
  },
  params: {
    _: Date.now(), // bust cache
  },
  timeout: 5000,
  withCredentials: false,
});

export default axiosInstance;
