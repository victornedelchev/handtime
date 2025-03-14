import BASE_URL from "../constants/baseURL";
import * as requester from "./requester";

const getAllWatches = async () => {
  const result = await requester.get(`${BASE_URL}/watches`);
  const watches = Object.values(result);

  return watches;
};

const getOneWatch = (watchId) =>
  requester.get(`${BASE_URL}/watches/${watchId}`);

const createWatch = async (watchData) => {
  const result = await requester.post(`${BASE_URL}/watches`, watchData);

  return result;
};

const deleteWatch = (watchId) =>
  requester.del(`${BASE_URL}/watches/${watchId}`);

const editWatch = (watchId, watchData) =>
  requester.put(`${BASE_URL}/watches/${watchId}`, watchData);

const watchesAPI = {
  getAllWatches,
  getOneWatch,
  createWatch,
  deleteWatch,
  editWatch,
};

export default watchesAPI;
