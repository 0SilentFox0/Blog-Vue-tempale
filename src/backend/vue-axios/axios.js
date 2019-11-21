import axios from "axios";

const API_URL = process.env.API_URL || "http://127.0.0.1:8000/api/v1";
const isAutho = {};
if (localStorage.token !== undefined)
  isAutho.Authorization = "Bearer " + localStorage.token;

const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    ...isAutho
  }
});

http.interceptors.request.use(async config => {
  if (!localStorage.token)
    return config;
  try {
    await axios.get(API_URL + "/users/", {
      headers: { Authorization: "Bearer " + localStorage.token }
    });
  } catch (e) {
    if (e.response.status === 401 && localStorage.refresh) {
      const ref = await axios.post(API_URL + "/account/refresh", {
        refresh: localStorage.refresh
      });
      localStorage.token = ref.data.access;
      http.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.token;
    }
  }
  return config;
});

export default http;
