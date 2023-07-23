const search = document.querySelector(".input input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".date");
const value = document.querySelector(".value");
const sortDesc = document.querySelector(".sort-desc");
const visibility = document.querySelector(".eyes");
const wind = document.querySelector(".wind");
const sun = document.querySelector(".sun");
const container = document.querySelector(".container");
const body = document.querySelector("body")
const weather = document.querySelector(".weather")

async function changeWeatherUI(address) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=db548d87cfa4478d09896dd93fde33b7`;
  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    container.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + " (m)";
    wind.innerText = data.wind.speed + " (m/s)";
    sun.innerText = data.main.humidity + " (%)";
    let temp = Math.round(data.main.temp - 273.15);
    value.innerText = temp
    sortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString()
    if(temp <= 20) {
        body.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(./img/cold.png) no-repeat center/cover";
        weather.style.background = "url(./img/cold.png) no-repeat center/cover";
    } else if(temp <= 24) {
        body.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(./img/cool.jpg) no-repeat center/cover";
        weather.style.background = "url(./img/cool.jpg) no-repeat center/cover";
    } else if(temp <= 27) {
        body.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('./img/warm.jpg') no-repeat center/cover";
        weather.style.background = "url(./img/warm.jpg) no-repeat center/cover";
    } else {
        body.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(./img/hot.png) no-repeat center/cover";
        weather.style.background = "url(./img/hot.png) no-repeat center/cover";
    }
  } else {
    container.classList.add("hide");
  }
}
changeWeatherUI('Ha Noi')
search.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        let address = search.value.trim();
        changeWeatherUI(address)
        search.value = ''
    }
})
