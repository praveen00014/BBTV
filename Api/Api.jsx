import axios from "axios";
const BASE_URL = "https://developer.zingotv.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
