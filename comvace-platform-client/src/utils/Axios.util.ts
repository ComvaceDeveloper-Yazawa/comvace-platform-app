import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  console.log("Request:", config.method?.toUpperCase(), config.url);
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("Error:", error.message);
    return Promise.reject(error);
  },
);
