import WEATHER_URL from "../constants/weatherURL";
import * as requester from "./requester";

const getWeather = async () => {
  try {
    const result = await requester.get(WEATHER_URL);

    return result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const weatherAPI = {
  getWeather,
};

export default weatherAPI;
