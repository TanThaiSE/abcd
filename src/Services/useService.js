import api from "./api";

const login = (userName, password) => {
  const data = { userName, password };
  return api.post(api.url.login, data).then((res) => res.data);
};

const userService = {
  login,
};
export default userService;
