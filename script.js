let weather=0

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
}

async function getWeather(weatherUrl){
    const weatherResponse = await fetch(weatherUrl);
    var weatherData = await weatherResponse.json();
    console.log(weatherData);

    weather = weatherData.weather[0].id;
    date = weatherData.dt;
    tempKelvin = weatherData.main.temp; 
    humidity = weatherData.main.humidity;
    wind = weatherData.wind.speed;
 //   rain = weatherData.
    convertToMetric(tempKelvin);
}

function onSubmit() {
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var country = document.getElementById("country").value;

    const limit=5;
    let lat=0;
    let lon=0;
     //weather
    let date=0 //date (exact)
    let tempKelvin =0 //temperature
    let wind = 0 //windspeed
    let rain =0 //rain
    let humidity = 0; //humidity
    let tempCelsius = 0; //

    const apiKey="aa411e4a1fd7d03c40d25e75fc3d7e06"

    const coordinateUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${province},${country}&limit=${limit}&appid=${apiKey}`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    getCoordinates(coordinateUrl);
    getWeather(weatherUrl);
    new fireWeatherIndex(weather, date, tempCelsius, wind, humidity);
}

const port = 5000

function convertToMetric(tempKelvin){
    tempCelsius = tempKelvin - 273.15;
}

class fireWeatherIndex {
    constructor(weather, date, tempCelsius, wind, humidity){
        this.weather=weather;
        this.date=date;
        this.tempCelsius=tempCelsius
        this.wind=wind;
        this.humidity=humidity;
    }
}