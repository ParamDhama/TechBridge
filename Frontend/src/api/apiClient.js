import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://techbridge-qt0l.onrender.com", // Replace with your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;