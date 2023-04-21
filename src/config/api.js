import axios from "axios";
import { config } from "./config";

// export const source = axios.CancelToken.source();

export const API_URL = config.api;

const request = axios.create({
  baseURL: `${API_URL}`,
  timeout: 300000, // 300s
  headers: {
    "Content-Type": "application/json",
  },
  // cancelToken: source.token
});

/**
 * refresh token and redirect to login page
 * */
request.interceptors.response?.use(
  (response) => response,
  async (error) => {
    return error.response;
  }

  // return Error object with Promise
  // return Promise.reject(error.message)
);

export { request };
