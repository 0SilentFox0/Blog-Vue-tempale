import axios from "axios";

const API_URL = process.env.API_URL || "http://127.0.0.1:8000/api/v1";
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
  await axios
    .get(API_URL + "/users/", {
      headers: { Authorization: "Bearer " + localStorage.token }
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

// if (!localStorage.token) return config;
//
// console.log("FROM CONFIG");
// return config;
// });

export default http;
