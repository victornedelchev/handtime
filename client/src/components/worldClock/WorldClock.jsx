import "./WorldClock.css";

import { useEffect, useState } from "react";

export default function WorldClock() {
  const [times, setTimes] = useState(new Date());

  const cities = [
    { id: 0, name: "Bengaluru", timeZone: "Asia/Kolkata" },
    { id: 1, name: "New York", timeZone: "America/New_York" },
    { id: 2, name: "London", timeZone: "Europe/London" },
    { id: 3, name: "Tokyo", timeZone: "Asia/Tokyo" },
    { id: 4, name: "Sydney", timeZone: "Australia/Sydney" },
    { id: 5, name: "Paris", timeZone: "Europe/Paris" },
    { id: 6, name: "Berlin", timeZone: "Europe/Berlin" },
    { id: 7, name: "Moscow", timeZone: "Europe/Moscow" },
    { id: 8, name: "Dubai", timeZone: "Asia/Dubai" },
    { id: 9, name: "Sao Paulo", timeZone: "America/Sao_Paulo" },
    { id: 10, name: "Rio de Janeiro", timeZone: "America/Sao_Paulo" },
    { id: 11, name: "Los Angeles", timeZone: "America/Los_Angeles" },
  ];

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      cities.forEach((city) => {
        newTimes[city.name] = new Date().toLocaleTimeString("en-US", {
          timeZone: city.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      });
      setTimes(newTimes);
    };

    updateTimes();

    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="world-clock-container">
      <h2 className="title">World Clock</h2>
      <div className="clock-container">
        {cities.map((city) => (
          <div key={city.id} className="city-card">
            <div className="city-name">{city.name}</div>
            <div className="city-time">{times[city.name]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
