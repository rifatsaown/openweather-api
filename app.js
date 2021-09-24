const searchWeather = async () => {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${'9d1b58c4f1ba67b08c2901b2bc4f1103'}&units=metric`);
    const data = await res.json();
    showWeather(data);
    cityInput.value = "";
}
const showWeather = data => {
    if (data.cod === 200) {
        document.getElementById('city').innerText = `${data.name}`;
        document.getElementById('temp').innerText = `${data.main.temp}`;
        document.getElementById('weatherStats').innerText = `${data.weather[0].main}`;
        document.getElementById('img').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById('weather').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    } else {
        document.getElementById('error').innerHTML = `<h1 class="error">${data.message}</h1>`
        document.getElementById('weather').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}