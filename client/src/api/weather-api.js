import WEATHER_URL from "../constants/weatherURL";
import * as requester from "./requester";

const getWeather = async () => {
  const result = await requester.get(WEATHER_URL);
  
  return result;
};

const weatherAPI = {
  getWeather,
};

export default weatherAPI;
