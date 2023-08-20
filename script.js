import getWeatherFromId from "./prediction.js";

let weatherid=801

function checkScroll() {
    var startY = $(".navbar").height() * 2; //The point where the navbar changes in px
  
    if ($(window).scrollTop() > startY) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  }
  
  if ($(".navbar").length > 0) {
    $(window).on("scroll load resize", function () {
      checkScroll();
    });
  }
  
async function getCoordinates(coordinateUrl) {
    const locationResponse = await fetch(coordinateUrl);
    var locationData = await locationResponse.json();
    
    lat = locationData[0].lat;
    lon = locationData[0].lon;

    const locData = [lat, lon];
    return locData;
}

async function getWeather(weatherUrl){
    const weatherResponse = await fetch(weatherUrl);
    var weatherData = await weatherResponse.json();
    
    weatherid = weatherData.weather[0].id;
    date = weatherData.dt;
    tempKelvin = weatherData.main.temp; 
    humidity = weatherData.main.humidity;
    wind = weatherData.wind.speed;
 
    tempCelsius= convertToMetric(tempKelvin);

    const weathData = [tempCelsius, wind, humidity, weatherid];
    return weathData;
}

async function onSubmit() {
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var country = document.getElementById("country").value;

    
    const limit=5;
    var date=0 //date (exact)
    var tempKelvin =0 //temperature
    var wind = 0 //windspeed
    var rain =0 //rain
    var humidity = 0; //humidity
    var tempCelsius = 0; 
    var fwi=0;

    const apiKey="aa411e4a1fd7d03c40d25e75fc3d7e06"

    const coordinateUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${province},${country}&limit=${limit}&appid=${apiKey}`;
   

    var locationDatas= await getCoordinates(coordinateUrl);

    var lat = locationDatas[0];
    var lon = locationDatas[1];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    var weatherDatas = await getWeather(weatherUrl);

    var tempCelsius = weatherDatas[0];
    var wind = weatherDatas[1];
    var humidity = weatherDatas[2];
    var weatherid = weatherDatas[3];
    
 // Calculate FFMC, DMC, DC, ISI, BUI
    const ffmc = calculateFFMC(weather, wind);
    const dmc = calculateDMC(humidity);
    const dc = calculateDC(tempCelsius);
    const isi = calculateISI(wind, weather);
    const bui = calculateBUI(humidity, tempCelsius);
    
    // Calculate FWI
    fwi = calculateFWI(isi, bui);

}
console.log(getWeatherFromId(weatherid))

function convertToMetric(tempKelvin){
    return tempKelvin - 273.15;
}

function calculateFFMC(weatherid, wind) {
        return (91.9 * Math.exp(0.1386 * weatherid)) * (1 - Math.exp(-0.000265 * wind));
}
      
function calculateDMC(humidity) {
        return 7.2 * (Math.exp(0.0365 * humidity)) - 1;
}
      
function calculateDC(tempCelsius) {
        return 7.9 * (Math.exp(0.00412 * tempCelsius)) - 1;
}
      
function calculateISI(wind, weatherid) {
        return 0.208 * wind * (100 - weatherid);
}
      
function calculateBUI(humidity, tempCelsius) {
        return 0.1 * humidity * (100 - tempCelsius);
}
      
function calculateFWI(isi, bui) {
        return (isi + bui) / 2;
}



      
