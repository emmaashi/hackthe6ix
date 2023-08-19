import fetch from "node-fetch";

let city = "Toronto";
let province = "Ontario";
let country = "Canada";
const limit = 5;
let lat = "";
let lon = "";

const apiKey = "9fbfb4c21f13700376f6050045993ca4";

const coordinateUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${province},${country}&limit=${limit}&appid=${apiKey}`;

const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"9fbfb4c21f13700376f6050045993ca4"}`;

//&units=metric
let response1 = await fetch(coordinateUrl, {
  method="POST",
  

}
fetch(coordinateUrl)
  .then((response) => response.json())
  .then((locationData) => {
    lon = locationData.lon;
    lat = locationData.lat;

    console.log(lon);
    console.log(lat);
  });

fetch(weatherUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    //const locationElement = document.getElementById('location');
    //const temperatureElement = document.getElementById('temperature');
    //const descriptionElement = document.getElementById('description');
    //const humidityElement = document.getElementById('humidity');
    const location = weatherData.name;
    //const temperature = weatherData.main.temp;
    //const descritpion = weatherData.weather[0].description;
    //const humidity = weatherData.main.humidity;

    console.log(location);
    //console.log(temperature);
    //console.log(description);
    //console.log(humidity);
    //locationElement.textContent = data.name;
    //temperatureElement.textContent = data.main.temp;
    //descriptionElement.textContent = data.weather[0].description;
    //humidityElement.textContent = data.main.humidity;
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
