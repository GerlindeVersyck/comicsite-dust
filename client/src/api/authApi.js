import axios from "axios";
import { getToken } from "../utils/storage";

const api = axios.create({
  baseURL: "http://localhost:5050/api",
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const registerRequest = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginRequest = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const getAboutRequest = async () => {
  const response = await api.get("/about");
  return response.data;
};

export const getContactsRequest = async () => {
  const response = await api.get("/contact");
  return response.data;
};

export const getCalendarRequest = async () => {
  const response = await api.get("/calendar");
  return response.data;
};

export const getComicsRequest = async () => {
  const response = await api.get("/comics");
  return response.data;
};

export const getComicByIdRequest = async (comicId) => {
  const response = await api.get(`/comics/${comicId}`);
  return response.data;
};

export const getBlogsRequest = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

export const getBlogByIdRequest = async (blogId) => {
  const response = await api.get(`/blogs/${blogId}`);
  return response.data;
};

export const getFavoritesRequest = async () => {
  const response = await api.get("/favorites");
  return response.data;
};

export const addFavoriteRequest = async (comicId) => {
  const response = await api.post("/favorites", { comicId });
  return response.data;
};

export const removeFavoriteRequest = async (comicId) => {
  const response = await api.delete(`/favorites/${comicId}`);
  return response.data;
};

export const addCommentRequest = async (blogId, payload) => {
  const response = await api.post(`/comments/blogs/${blogId}`, payload);
  return response.data;
};

export const getAdminUsersRequest = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

export const deleteUserRequest = async (userId) => {
  const response = await api.delete(`/admin/users/${userId}`);
  return response.data;
};

export default api;
