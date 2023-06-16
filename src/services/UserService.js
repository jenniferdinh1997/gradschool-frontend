import axios from "axios";

const BASE_URL = "/api/users/";

const signup = async (user) => {
  const response = await axios.post(`${BASE_URL}/signup`, user);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${BASE_URL}/login`, user);
  return response.data;
}

const userService = {
  signup,
  login
};

export default userService;
