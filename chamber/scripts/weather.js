const apiKey = "ddb94c30afccd92084082506ea30f335";
const lat = "7.1600"; // Ogun State, Nigeria
const lon = "3.3500";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather() {
  try {
    // Current weather
    const response = await fetch(weatherUrl);
    const data = await response.json();

    document.getElementById("current-temp").textContent = `${Math.round(data.main.temp)}°F`;
    document.getElementById("weather-desc").textContent = data.weather[0].description;

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").setAttribute("src", iconSrc);
    document.getElementById("weather-icon").setAttribute("alt", data.weather[0].description);

    // Extra details
    const details = document.getElementById("current-details");
    details.innerHTML = `
      <li>High: ${Math.round(data.main.temp_max)}°F</li>
      <li>Low: ${Math.round(data.main.temp_min)}°F</li>
      <li>Humidity: ${data.main.humidity}%</li>
      <li>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</li>
      <li>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</li>
    `;

    // Forecast (next 3 days at 12:00)
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    // Filter: one forecast per day (12:00)
    const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach(day => {
      const li = document.createElement("li");
      const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      li.textContent = `${date}: ${Math.round(day.main.temp)}°F`;
      forecastList.appendChild(li);
    });

  } catch (error) {
    console.error("Weather fetch error:", error);
  }
}

getWeather();