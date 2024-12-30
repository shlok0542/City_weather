let btn = document.querySelector("button");
let input = document.querySelector("input");
let cityName = document.querySelector(".city");
let temperature = document.querySelector(".tem");
let weather = document.querySelector(".weath");
let humidity = document.querySelector(".humi");
let wind = document.querySelector(".wind");
let toptemp = document.querySelector(".temp");
let visibility = document.querySelector(".visi");
let pressure = document.querySelector(".pre");
let longitude = document.querySelector(".lon");
let latitude = document.querySelector(".lat");
async function getData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc3ede01dd6ce4dc3a1e97a2c51bcaf8`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`We can't find this "please type correct city name"`);
    }
    const json = await response.json(); 
    toptemp.innerHTML = `${Math.trunc(
      json.main.temp_max - 273
    )}<span>&deg;</span>`;
    cityName.innerHTML = `${json.name}`;

    temperature.innerHTML = `${Math.trunc(json.main.temp_max - 273)} &deg;`;

    weather.innerHTML = `${json.weather[0].description}`;

    humidity.innerHTML = `${json.main.humidity}`;

    wind.innerHTML = `${json.wind.speed} km/h`;

    visibility.innerHTML = `${json.visibility}`;

    pressure.innerHTML = `${json.main.pressure}`;
    longitude.innerHTML = `${json.coord.lon}`;
    latitude.innerHTML = `${json.coord.lat}`;
  } catch (error) {
    alert(error.message);
    cityName.innerHTML="Sorry : We can not find this city";
  }
}
btn.addEventListener("click", async () => {
  getData(input.value);
});
