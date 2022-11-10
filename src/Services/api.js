import axios from "axios";

const url = {
  // baseUrl: "https://61c320f89cfb8f0017a3e98d.mockapi.io/api/getMyclass",
  baseUrl:'https://localhost:7182/api',
  login: "/api/Users/authenticate",
  students: "/students",
  products:"/Product"
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});
const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
