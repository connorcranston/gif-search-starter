// Weather API endpoint
const api_root = 'http://api.openweathermap.org/data/2.5/weather?zip='

//API key
var api_key = 'bdb3f513087fa28d44c1a734e4e1ef9f'

//select elements from the DOM
var city_name = document.querySelector('#city_name')
var zip = document.querySelector('.searchBox')
var weather = document.querySelector('.weather')
var temp = document.querySelector('.temp')
var humid = document.querySelector('.humid')

function kelvinToFahreinheit(kelvin){
    return Math.round(kelvin * (9/5) - 459.67)
}

function getWeather(zipCode){
$.ajax({
        type: "GET",
        url: `${api_root}${zipCode},us&appid=${api_key}`,
        dataType: "json",
        success: function(data){
            console.log(data)
            weather.textContent = data.weather[0].main
            city_name.textContent = data.name
            temp.innerHTML = `${kelvinToFahreinheit(data.main.temp)} &deg;`
            humid.textContent = `${data.main.humidity}%`
        },
        error: function(error){
            console.log(error)
         }
    })
}

getWeather('33166')

zip.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
    getWeather(this.value)
    }
})