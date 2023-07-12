import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
