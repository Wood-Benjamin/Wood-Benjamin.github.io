// API Weather Key: 78e281f005984c45bee1997e137143b6

//  Franklin City ID: 4156210

var weatherRequest = new XMLHttpRequest;
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=4156210&appid=78e281f005984c45bee1997e137143b6&units=imperial',true);

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current-temp').innerHTML = weatherInfo.main.temp;
    
    var iconcode = weatherInfo.weather[0].icon;
    
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    
    document.getElementById('weatherIcon').src = icon_path;
    
}