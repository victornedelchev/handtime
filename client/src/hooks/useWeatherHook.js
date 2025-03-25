import { useEffect, useState } from "react";

import clear_icon_day from "../assets/clear.png";
import clear_icon_night from "../assets/moon.png";
import cloud_icon_day from "../assets/cloud.png";
import cloud_icon_night from "../assets/partly-cloudy-night.png";
import drizzle_icon_day from "../assets/drizzle.png";
import drizzle_icon_night from "../assets/night-drizzle.png";
import rain_icon_day from "../assets/rain.png";
import rain_icon_night from "../assets/night-raining.png";
import snow_icon_day from "../assets/snow.png";
import snow_icon_night from "../assets/night-snow.png";
import * as requester from "../api/requester";
import WEATHER_URL from "../constants/weatherURL";

const icons = {
  "01d": clear_icon_day,
  "01n": clear_icon_night,
  "02d": cloud_icon_day,
  "02n": cloud_icon_night,
  "03d": cloud_icon_day,
  "03n": cloud_icon_night,
  "04d": cloud_icon_day,
  "04n": cloud_icon_night,
  "09d": drizzle_icon_day,
  "09n": drizzle_icon_night,
  "10d": rain_icon_day,
  "10n": rain_icon_night,
  "13d": snow_icon_day,
  "13n": snow_icon_night,
};

const useGetCurrentWeatherData = () => {
  const [weatherData, setWeatherData] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await requester.get(WEATHER_URL);

        const icon = icons[result.weather[0].icon] || clear_icon_day;

        setWeatherData({
          temperature: Math.floor(result.main.temp),
          location: result.name,
          icon: icon,
        });
      } catch (error) {
        setWeatherData(false);
        console.error(error);
      }
    })();
  }, []);

  return [weatherData, setWeatherData];
};

export { useGetCurrentWeatherData };
