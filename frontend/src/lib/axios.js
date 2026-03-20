import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:2022/api"
      : "https://light-8bd4.onrender.com/api",
  withCredentials: true,
});