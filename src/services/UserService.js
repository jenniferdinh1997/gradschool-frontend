import axios from "axios";

const BASE_URL = "/api/users/";

const signup = async (user) => {
  const response = await axios.post(`${BASE_URL}/signup`, user);
  if (response.ok) return response.json();
};

const userService = {
  signup,
};

export default userService;
