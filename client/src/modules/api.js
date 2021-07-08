import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const createUser = async (userData) => {
  const res = await api.post(`/user`, userData);
  return res.data;
};

export default {
  createUser,
};
