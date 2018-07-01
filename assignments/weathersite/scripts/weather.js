(function homePage(){
var section = document.querySelector('#_weather');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var requestObject = new XMLHttpRequest();
requestObject.open('GET', requestURL);
requestObject.responseType = 'text';
requestObject.send();

requestObject.onload = function() {
    var weatherInfo = requestObject.response;
    var weather = JSON.parse(weatherInfo);
    displayTownData(weather);
}
 
function displayTownData(jsonObj) {
    var towns = jsonObj['towns'];
    var townImgIndx = 1;

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name === 'Placerton') continue;
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImg = document.createElement('img');
        myImg.src = "images/towns/img" + townImgIndx + ".jpeg";
        townImgIndx++;
        
        myH3.textContent = towns[i].name;
        myPara1.textContent = "Motto: " + towns[i].motto;
        myPara2.textContent = "Year Founded: "  + towns[i].yearFounded;
        myPara3.textContent = "Population: " + towns[i].currentPopulation;
        myPara4.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        
        
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}
})();

(function currentWeather(){
// API Weather Key: 78e281f005984c45bee1997e137143b6

//  Franklin City ID: 55333
    //springfield, mn 56087
    //Greenville, NC  27858
var urlString = window.location.href:
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];
var zipcode = "";
if (pageHREF !=="") {
    if (pageHREF = "franklin.html"){
        zipcode = 55333;
    }
    else if (pageHREF = "springfield.html"){
        zipcode = 56087;
    }
    else if (pageHREF = "greenville.html"){
        zipcode = 27858;
    }
    else {zipcode = 84078;}
    return zipcode;
}
    
var weatherRequest = new XMLHttpRequest;
weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode +',us&appid=78e281f005984c45bee1997e137143b6&units=imperial',true);
weatherRequest.send();

weatherRequest.onload = function() {
    var fr_weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(fr_weatherInfo);
    
    // current temp
    document.getElementById('curTemp').innerHTML = fr_weatherInfo.main.temp;
    
    // icon details, current condition details
    var icondetails = fr_weatherInfo.weather[0].description;
    document.getElementById('icondetailsTemp').innerHTML = icondetails;
    
    //  icon, current condition icon
    var iconcode = fr_weatherInfo.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('iconTemp').src = icon_path;
    
    //  high temp
    document.getElementById('highTemp').innerHTML = fr_weatherInfo.main.temp_max;
    //  low temp
    document.getElementById('lowTemp').innerHTML = fr_weatherInfo.main.temp_min;
    //  precipitation
    if (fr_weatherInfo.precipitation < 0 || fr_weatherInfo.precipitation == null){
        document.getElementById('precip').innerHTML = "0"
    } else {
    document.getElementById('precip').innerHTML = fr_weatherInfo.precipitation;
    }
    //  windspeed
    document.getElementById('windspeed').innerHTML = fr_weatherInfo.wind.speed;
    
    // f equals wind chill factor
// t equals average air temperature in Fahrenheit
// s equals wind speed in miles per hours
// compute wind chill with formula "f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16"
// display wind chill to user
{
var t = document.getElementById('curTemp').innerHTML;
var s = document.getElementById('windspeed').innerHTML;
var y = Math.pow(s, 0.16);
var f = 35.74 + 0.6215 * t - 35.75 * y + 0.4275 * t * y;
var x = f.toFixed(2);
document.getElementById('windchill').innerHTML = "WindChill Factor: " + x + "&deg;F";
}
    
}
})();

(function franklinPage(){
var section = document.querySelector('#fr_weather');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var requestObject = new XMLHttpRequest();
requestObject.open('GET', requestURL);
requestObject.responseType = 'text';
requestObject.send();

requestObject.onload = function() {
    var weatherInfo = requestObject.response;
    var weather = JSON.parse(weatherInfo);
    displayTownData(weather);
    
}
 
function displayTownData(jsonObj) {
    var towns = jsonObj['towns'];
    var townImgIndx = 1;

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == 'Franklin') {
        var myArticle = document.createElement('article');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');
        
        myPara1.textContent = "Motto: " + towns[i].motto;
        myPara2.textContent = "Year Founded: "  + towns[i].yearFounded;
        myPara3.textContent = "Population: " + towns[i].currentPopulation;
        myPara4.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        myPara5.textContent = "Events:";
        myPara6.textContent = "~" + towns[i].events[0];
        myPara7.textContent = "~" + towns[i].events[1];
        myPara8.textContent = "~" + towns[i].events[2];
        
        
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara8);
        
        section.appendChild(myArticle);
       
    }
    }
}
})();
