import { useEffect, useState } from "react";

import "./Weather.css";

import clear_icon_day from "../../assets/clear.png";
import clear_icon_night from "../../assets/moon.png";
import cloud_icon_day from "../../assets/cloud.png";
import cloud_icon_night from "../../assets/partly-cloudy-night.png";
import drizzle_icon_day from "../../assets/drizzle.png";
import drizzle_icon_night from "../../assets/night-drizzle.png";
import rain_icon_day from "../../assets/rain.png";
import rain_icon_night from "../../assets/night-raining.png";
import snow_icon_day from "../../assets/snow.png";
import snow_icon_night from "../../assets/night-snow.png";
import * as requester from "../../api/requester";
import WEATHER_URL from "../../constants/weatherURL";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);

  const icons = {
    "01d": clear_icon_day,
    "01n": clear_icon_night,
    "02d": cloud_icon_day,
    "02n": cloud_icon_night,
    "03d": cloud_icon_day,
    "03n": cloud_icon_night,
    "04d": drizzle_icon_day,
    "04n": drizzle_icon_night,
    "09d": rain_icon_day,
    "09n": rain_icon_night,
    "10d": rain_icon_day,
    "10n": rain_icon_night,
    "13d": snow_icon_day,
    "13n": snow_icon_night,
  };

  const getWeather = async () => {
    try {
      const result = await requester.get(WEATHER_URL);

      const icon = icons[result.weather[0].icon] || clear_icon_day;

      setWeatherData({
        temperature: Math.floor(result.main.temp),
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="temperature-container">
      <span
        className="temperature"
        style={
          weatherData.temperature <= 15 ? { color: "blue" } : { color: "red" }
        }
      >
        {!weatherData.temperature ? "--" : weatherData.temperature}°c
      </span>
      <img
        src={!weatherData.icon ? "" : weatherData.icon}
        alt="weather-icon"
        className="weather-icon"
      />
    </div>
  );
}
