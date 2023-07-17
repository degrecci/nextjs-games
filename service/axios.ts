import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      redirect("/401");
    }

    return Promise.reject(error);
  }
);
