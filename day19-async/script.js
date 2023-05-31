const apiKey = '9b3abd72af5e8ee4c215adb53b59b0e5';

let form = document.getElementById('weather-form');
let weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data = await response.json();

        let card = `
            <div class="card" style="width: 18rem;">
                <img src="./weather.jpg" class="card-img-top" alt="weather" height="200px" width="200px">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${data.main.temp}&deg;C</li>
                    <li class="list-group-item">Feels Like: ${data.main.feels_like}&deg;C</li>
                    <li class="list-group-item">Pressure: ${data.main.pressure}</li>
                </ul>
            </div>
        `;
        weatherInfo.innerHTML = card;
    } catch (error) {
        console.error('error fetching the weather data');
    }
}