import API_KEY from "./setup.js";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGetGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGetGeoFail() {
  alert("Can't find you. Please accept location Info");
}

navigator.geolocation.getCurrentPosition(onGetGeoSuccess, onGetGeoFail);
