import "./Weather.css";

import { useGetCurrentWeatherData } from "../../hooks/useWeatherHook";

export default function Weather() {
  const [weatherData] = useGetCurrentWeatherData();

  return (
    <div className="temperature-container">
      <span
        className="temperature"
        style={
          weatherData.temperature <= 15 ? { color: "blue" } : { color: "red" }
        }
      >
        {!weatherData.location ? "--" : weatherData.location}{" "}
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
