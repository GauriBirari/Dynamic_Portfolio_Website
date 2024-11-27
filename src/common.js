import axios from "axios";

import {
  BACKEND_SERVER_URL,
  userTokenName,
  superAdminTokenName,
} from "./config";

export const server = axios.create({
  baseURL: BACKEND_SERVER_URL,
  proxy: BACKEND_SERVER_URL,
});

export const removeUserToken = () => {
  return localStorage.removeItem(userTokenName);
};

export const removeSuperAdminToken = () => {
  return sessionStorage.removeItem(superAdminTokenName);
};

export const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + " ...";
  }
  return text;
};
