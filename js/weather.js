const API_KEY = "54e6b2662da4d94207a1c4181eb56192";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const name = document.querySelector("#weather span:first-child");
        const wheather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        name.innerText =data.name; 
        wheather.innerText =data.weather[0].main;
        temp.innerText = data.main.temp + "°C";
    });
}
function onGeoError(){
    alert("I can't find you. No weather for you dude :(")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);