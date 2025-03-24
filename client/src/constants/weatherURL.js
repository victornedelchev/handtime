const city = "Novi pazar, BG";

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
  import.meta.env.VITE_APP_ID
}`;

export default WEATHER_URL;
