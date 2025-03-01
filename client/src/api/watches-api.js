import BASE_URL from "../constansts/baseURL";
import * as requester from "./requester";

const getAllWatches = async () => {
  const result = await requester.get(`${BASE_URL}/watches`);
  const watches = Object.values(result);

  return watches;
};

const watchesAPI = {
  getAllWatches,
};

export default watchesAPI;
