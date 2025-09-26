// Select HTML elements to manipulate
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Build the OpenWeatherMap API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=ddb94c30afccd92084082506ea30f335';

// Asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output to console for testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display results in the HTML
function displayResults(weatherData) {
  // Temperature
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)} °F`;

  // Weather icon
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  let desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

// Invoke the function
apiFetch();