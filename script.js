const apiKey = "0b1bcd95513833b00b1fa653a25646cf";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var cityName = document.querySelector(".search input");
var cityBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");



async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    var image = data.weather[0].main;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "ºc";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".Windspeed").innerHTML=data.wind.speed + " km/hr";

    weatherIcon.src = `./${image}.png`; 

    document.querySelector(".weather").style.display = "block" ;
    document.querySelector(".error").style.display = "none" ;
    }
    
}
cityBtn.addEventListener("click",()=>{
    checkweather(cityName.value)
})
