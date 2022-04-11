import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/mysite-2ee22/us-central1/api",
});

export default instance;
