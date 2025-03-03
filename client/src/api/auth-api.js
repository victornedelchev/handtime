import API_URL from "../constants/apiURL.";
import * as requester from "./requester";

export const login = (email, password) => {
  requester.post(`${API_URL}/login`, { email, password });
};
