import BASE_URL from "../constants/baseURL";
import SORTING_STRING from "../constants/sortingString";

import * as requester from "./requester";

const getAllWatches = async () => {
  const result = await requester.get(`${BASE_URL}/watches`);
  const watches = Object.values(result);

  return watches;
};

const getLatestWatches = async () => {
  const result = await requester.get(`${BASE_URL}/watches${SORTING_STRING}`);
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
  getLatestWatches,
  getOneWatch,
  createWatch,
  deleteWatch,
  editWatch,
};

export default watchesAPI;
