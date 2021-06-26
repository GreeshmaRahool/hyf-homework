//Sign up for api key
//First call to the weather api
//Fetch weather data from a city
const txtcityName = document.querySelector('#txtCityName');
const fetchButton = document.querySelector('#fetchButton');
const appKey = '6e92755c3cd985413c44c7aac6eff7ec';

const getWeatherData = () => {
    
    const cityName = txtcityName.value;
    if (!cityName) {
        alert('Provide a city name!');
    }
    else {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}`).then(res => res.json()).then((data) => {
            if ( data.value == 0){
                alert('No weather data found!')
            }
            else {
                clearOldData();
                displayWeatherData(data);
            }
        })
    }
}
fetchButton.addEventListener('click', getWeatherData)

//Display the data
// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
function displayWeatherData(data) {
    

    const cityName = document.querySelector('#cityName');
    cityName.innerHTML = data.name;
    const weatherIcon = document.createElement('img');
    
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('height', '200px');
    weatherIcon.setAttribute('width', '200px');
    const currentDiv = document.querySelector('.current');
    currentDiv.appendChild(weatherIcon);
    
    const temperature = document.querySelector('#temperature');
    temperature.innerHTML = Math.floor((data.main.temp)- 273.15)+'°';
    const windSpeed = document.querySelector('#windSpeed');
    windSpeed.innerHTML = `WIND : ${Math.floor(data.wind.speed)} m/s`;
    
    const description = document.querySelector('#description');
    description.innerHTML = data.weather[0].description;

    const sunRise = document.querySelector('#sunRise');
    sunRise.innerHTML = `SUN RISE : ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;

    const sunRSet = document.querySelector('#sunSet');
    sunSet.innerHTML = `SUN SET : ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;

 

//Optional a map showing where the city is located
    getMapCoordinates(data);
    function getMapCoordinates(data) {
        const latlongvalue = `${
            data.coord.lat
        },${
            data.coord.lon
        }`;
        const map_url = `https://maps.google.com/maps?q=${latlongvalue}&hl=es&z=14&amp;output=embed`;
        document.getElementById("map").innerHTML = `<iframe src="${map_url}"></iframe>`;
    }

//Your feature here
    const feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `FEELS LIKE : ${Math.floor((data.main.feels_like)- 273.15)}°`;
  
    const tempMaxMin = document.querySelector('#tempMaxMin');
    tempMaxMin.innerHTML = `H : ${Math.floor((data.main.temp_max) - 273.15)}°  L : ${Math.floor((data.main.temp_min) - 273.15)}°`;

}

//Use my current position optional
const currentLocation = document.querySelector('#currentLocation')
currentLocation.addEventListener('click', function () {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
    }
    else {
        console.log('Locating…');
        navigator.geolocation.getCurrentPosition(function (position) {
            const latlongvalue = `${
                position.coords.latitude
            },${
                position.coords.longitude
            }`;
            const map_url = `https://maps.google.com/maps?q=${latlongvalue}&hl=es&z=14&amp;output=embed`;
            document.getElementById("map").innerHTML = `<iframe src="${map_url}"></iframe>`;
            getData(position)
        
        });
    }
});

const getData = (position) => {
   
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appKey}`).then(res => res.json()).then((data) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${appKey}`).then(res => res.json()).then((data) => {
                clearOldData();
                displayWeatherData(data);
            })
        })
        
}


function clearOldData() {
    document.querySelectorAll("img").forEach(element => {
        element.remove()
    });
}
