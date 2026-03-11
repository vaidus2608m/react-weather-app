import React from "react";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function WeatherCard({ weather }) {
  const city = weather?.name ?? "--";
  const temp = weather?.main?.temp ?? "--";
  const humidity = weather?.main?.humidity ?? "--";
  const wind = weather?.wind?.speed ?? "--";
  const description = weather?.weather?.[0]?.description
    ? capitalizeWords(weather.weather[0].description)
    : "--";

  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  if (!weather) {
    return <p className="empty-state">🔍 Search a city to see the weather</p>;
  }

  return (
    <div className="weather-card">
      <p className="card-city">{city}</p>

      {iconUrl && <img className="card-icon" src={iconUrl} alt={description} />}

      <p className="card-description">{description}</p>

      <p className="card-temp">
        {typeof temp === "number" ? Math.round(temp) : temp}
        <sup>°C</sup>
      </p>

      <hr className="card-divider" />

      <div className="card-stats">
        <div className="card-stat">
          <span className="stat-emoji">💧</span>
          <span className="stat-value">{humidity}%</span>
          <span className="stat-label">Humidity</span>
        </div>
        <div className="card-stat">
          <span className="stat-emoji">💨</span>
          <span className="stat-value">{wind} m/s</span>
          <span className="stat-label">Wind</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
