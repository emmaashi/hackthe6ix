//module imports
const express = require("express");
const app = express();
const bp = require("body-parser");
const request = require("request");
``;
const apiKey = "9fbfb4c21f13700376f6050045993ca4";

app.post("/scan", (req, res) => {
  const city = req.body.city;
  console.log(city);
  if (city.length === 0) res.send("No City inputted");
});

app.post("/scan", (req, res) => {
  const province = req.body.province;
  console.log(province);
  if (province.length === 0) res.send("No province inputted");
});

app.post("/scan", (req, res) => {
  const country = req.body.country;
  console.log(country);
  if (country.length === 0) res.send("No Country inputted");
});

const limit = 5;

const coordinateUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${province},${country}&limit=${limit}&appid=${apiKey}`;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(coordinateUrl)
  .then((response) => response.json())
  .then((locationData) => {
    const lon = locationData.lon;
    const lat = locationData.lat;
  });

fetch(weatherUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    //const locationElement = document.getElementById('location');
    //const temperatureElement = document.getElementById('temperature');
    //const descriptionElement = document.getElementById('description');
    //const humidityElement = document.getElementById('humidity');
    const location = weatherData.name;
    const temperature = weatherData.main.temp;
    const descritpion = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;

    //locationElement.textContent = data.name;
    //temperatureElement.textContent = data.main.temp;
    //descriptionElement.textContent = data.weather[0].description;
    //humidityElement.textContent = data.main.humidity;
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

app.get("/scan", (req, res) => {
  res.send(location, temperature, description, humidity);
});
