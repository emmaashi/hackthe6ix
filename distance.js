function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const lat = 42.1
    const lon = 29.3


    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        const locationElement = document.getElementById('location');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');

        locationElement.textContent = data.name;
        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = data.main.humidity;

        document.getElementById('weather').style.display = 'block';
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }