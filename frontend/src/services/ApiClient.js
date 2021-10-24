import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  }
});

export default apiClient;
