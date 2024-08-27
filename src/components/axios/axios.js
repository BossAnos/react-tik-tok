import axios from "axios";

// const API_URL = process.env.REACT_APP_BACKEND_URL;
const axiosOptions = {
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
}

const baseAxios = axios.create(axiosOptions)

export default baseAxios;