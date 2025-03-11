import API_URL from "../constants/apiURL.";
import * as requester from "./requester";

export const login = (email, password) =>
  requester.post(`${API_URL}/login`, { email, password });

export const register = (username, email, password) =>
  requester.post(`${API_URL}/register`, {
    username,
    email,
    password,
  });

export const logout = () => requester.get(`${API_URL}/logout`);
