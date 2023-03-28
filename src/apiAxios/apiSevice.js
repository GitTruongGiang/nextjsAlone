const { default: axios } = require("axios");
const { BASE_URL } = require("./confing");

const apiSevice = axios.create({
  baseURL: BASE_URL,
});

apiSevice.interceptors.request.use(
  (request) => {
    console.log("start request", request);
    return request;
  },
  (err) => {
    console.log("request error", err);
    return Promise.reject(err);
  }
);

apiSevice.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (err) => {
    console.log("response error", err);
    return Promise.reject(err);
  }
);

export default apiSevice;
