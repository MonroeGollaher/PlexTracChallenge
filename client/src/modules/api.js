import { api } from "../api";

export const createNewUser = async (userData) => {
  const res = await api.post("/user", userData);
  console.log(userData, "userData");
  console.log(res, "res");
  return res.data;
};

export const getAllUsers = async () => {
  const res = await api.get("/user");
  return res.data;
};
