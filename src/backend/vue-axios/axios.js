import axios from "axios";

const API_URL = process.env.API_URL || "http://yochered.pythonanywhere.com/api/v1";
const isAuthorized = {};
if (localStorage.token !== undefined)
  isAuthorized.Authorization = "Bearer " + localStorage.token;

const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    ...isAuthorized
  }
});

http.interceptors.request.use(async request => {
  if (!localStorage.token) return request;
  await axios
    .post(API_URL + "/account/token/verify/", {
      token: localStorage.token
    })
    .catch(async err => {
      if (err.response.status === 401 && localStorage.refresh) {
        await axios
          .post(API_URL + "/account/refresh/", {
            refresh: localStorage.refresh
          })
          .then(response => {
            localStorage.token = response.data.access;
            http.defaults.headers.common["Authorization"] =
              "Bearer " + localStorage.token;
            request.headers["Authorization"] = "Bearer " + localStorage.token;
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  return request;
});

export default http;
