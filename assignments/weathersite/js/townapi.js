var townRequest = new XMLHttpRequest();
townRequest.open('GET', '//byui-cit230.github.io/weather/data/towndata.json', true);

townRequest.send();

townRequest.onload = function () {
    var townData = JSON.parse(townRequest.responseText);
    console.log(townData)
    
    document.getElementById('fMoto').innerHTML = townData.towns["0"].motto;
    document.getElementById('fFounded').innerHTML = townData.towns["0"].yearFounded;
    document.getElementById('fPop').innerHTML = townData.towns["0"].currentPopulation;
    document.getElementById('fRain').innerHTML = townData.towns["0"].averageRainfall;
    
    document.getElementById('gMoto').innerHTML = townData.towns["1"].motto;
    document.getElementById('gFounded').innerHTML = townData.towns["1"].yearFounded;
    document.getElementById('gPop').innerHTML = townData.towns["1"].currentPopulation;
    document.getElementById('gRain').innerHTML = townData.towns["1"].averageRainfall;
    
    document.getElementById('sMoto').innerHTML = townData.towns["3"].motto;
    document.getElementById('sFounded').innerHTML = townData.towns["3"].yearFounded;
    document.getElementById('sPop').innerHTML = townData.towns["3"].currentPopulation;
    document.getElementById('sRain').innerHTML = townData.towns["3"].averageRainfall;
}