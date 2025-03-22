import { useEffect, useState } from "react";

import "./Weather.css";

import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import humidity_icon from "../../assets/humidity.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);

  const icons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const getWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      const icon = data.weather[0].icon || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        winSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getWeather("Sofia");
  }, []);

  return (
    <div>
      <span
        className="temperature"
        style={
          weatherData.temperature <= 15 ? { color: "blue" } : { color: "red" }
        }
      >
        {weatherData.temperature}°c
      </span>
      <img src={weatherData.icon} alt="" className="weather-icon" />
    </div>
  );
}
