import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;  // https://tiktok.fullstack.edu.vn/api/
const axiosOptions = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
}

const baseAxios = axios.create(axiosOptions)

export default baseAxios;