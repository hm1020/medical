import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseURL } from "./apiUrl";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token"); // get the token from wherever you store it
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default api;
