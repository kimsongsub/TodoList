function onGetGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng);
}

function onGetGeoFail() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGetGeoSuccess, onGetGeoFail);
