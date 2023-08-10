(async function () {
    async function getWeatherData(cityName) {
      try {
        const apiKey = '858303e799e39182ae2a2ad9567829a8';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=858303e799e39182ae2a2ad9567829a8&units=metric`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
      }
    }

    async function updateWeatherInfo(cityName) {
      const data = await getWeatherData(cityName);
      if (!data) {
        // Show an error message to the user if data is null (error occurred)
        document.querySelector(".weather-info").textContent = "Failed to fetch weather data. Please try again later.";
        return;
      }

      const cityElement = document.querySelector(".city");
      const tempElement = document.querySelector(".temp");
      const humidityElement = document.querySelector(".humidity");
      const windspeedElement = document.querySelector(".windspeed");
      const iconElement = document.querySelector(".icon");

      if (!cityElement || !tempElement || !humidityElement || !windspeedElement || !iconElement) {
        console.error('Some elements not found.');
        return;
      }

      cityElement.textContent = data.name;
      tempElement.textContent = data.main.temp + "°C";
      humidityElement.textContent = data.main.humidity + "%";
      windspeedElement.textContent = data.wind.speed + "km/h";

      const weatherMain = data.weather[0].main;
      if (weatherMain === "Clouds") {
        iconElement.src = "clouds.png";
      } else if (weatherMain === "Clear") {
        iconElement.src = "clear.png";
      } else if (weatherMain === "Rain") {
        iconElement.src = "rain.png";
      } else if (weatherMain === "Drizzle") {
        iconElement.src = "drizzle.png";
      } else if (weatherMain === "Mist") {
        iconElement.src = "mist.png";
      } else {
        iconElement.src = ""; // If weather type is unknown, clear the icon
      }
    }

    // Add event listener to the Search button
    const searchBtn = document.querySelector(".search button");
    searchBtn.addEventListener("click", () => {
      const searchBox = document.querySelector(".search input");
      const cityName = searchBox.value.trim();
      if (cityName !== "") {
        updateWeatherInfo(cityName);
      } else {
        // Show a message to the user when the input field is empty
        document.querySelector(".weather-info").textContent = "Please enter a city name.";
      }
    });

    // Fetch weather data for a default city (you can set your desired default city)
    await updateWeatherInfo("Damak");
  })();