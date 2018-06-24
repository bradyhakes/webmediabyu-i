var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=1cbf1e6cc1c4de954efd8792b4193c23&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function(){
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData)
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp
}