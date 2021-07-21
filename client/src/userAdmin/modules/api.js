import { api } from "../../api";

export const createNewUser = async (userData) => {
  const res = await api.post("/user", userData);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await api.get("/user");
  return res.data;
};

export const removeUser = async (id) => {
  await api.delete(`/user/${id}`);
};

export const updateUser = async (id, body) => {
  await api.put(`/user/${id}`, body);
};
