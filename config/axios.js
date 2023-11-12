// import axios, { AxiosRequestConfig } from "axios";
// axios.defaults.baseURL = "http://localhost:8080/api";
// axios.defaults.headers.common["Authorization"] = "";
// axios.defaults.headers.post["Content-Type"] = "application/json";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080/PetHubAdmin/api",
});

export default api;
