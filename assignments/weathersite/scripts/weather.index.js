(function homePage(){
var section = document.querySelector('#_weather');
var requestURL = '//byui-cit230.github.io/weather/data/towndata.json';
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