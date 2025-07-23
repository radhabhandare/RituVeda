// src/api/userService.js
import axios from "axios";
import { API_URL } from "../config"; // Adjust the path if necessary

const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/users/register`, userData);
    console.log(res.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

export { registerUser };
