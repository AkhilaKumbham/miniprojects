document.getElementById('get-weather-btn').addEventListener('click', fetchWeather);
document.getElementById('city-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchWeather();
  }
});

async function fetchWeather() {
  const city = document.getElementById('city-input').value.trim();
  const apiKey = '25a0345218720b722c19de413a5b4430'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  if (!city) {
    document.getElementById('weather-display').innerText = 'Please enter a city name.';
    return;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found.');
    }
    const data = await response.json();
    displayWeather(data);
  } 
  catch (error) {
    document.getElementById('weather-display').innerText = `Error: ${error.message}`;
  }
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const rain = data.rain ? data.rain['1h'] || 'No rain' : 'No rain';
  const windSpeed = data.wind.speed;
  

  const weatherHtml = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${temperature} °C</p>
    <p>Rain: ${rain}</p>
     <p>Wind Speed: ${windSpeed} m/s</p>
  `;
  document.getElementById('weather-display').innerHTML = weatherHtml;
}
