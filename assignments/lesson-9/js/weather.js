var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4156210&appid=1cbf1e6cc1c4de954efd8792b4193c23&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('Current').innerHTML = weatherData.main.temp;
    document.getElementById('low').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind').innerHTML = weatherData.wind.speed;
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('description').innerHTML = weatherData.weather["0"].description;
    
    var iconcode = weatherData.weather["0"].icon;
    var icon_path = 'http://openweathermap.org/img/w/'+iconcode+'.png';
    document.getElementById('wIcon').src = icon_path;
}