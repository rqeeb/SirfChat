import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:2022/api"
      : "https://zonnect.vercel.app/api",
  withCredentials: true,
});