var header = document.querySelector('header');
var section = document.querySelector('section');

//  Store JSON URL reference
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//  Create an XHL request - keyword "new"
var request = new XMLHttpRequest();

//  open a new request with "open()"
request.open('GET', requestURL);

/*
*  First Example run through:
*        //  set the responseType to JSON and send() the request
*        request.responseType = 'json';
*        request.send();
*
*       //  Waiting for server response and function or method
*        request.onload = function() {
*        var superHeroes = request.response;
*        populateHeader(superHeroes);
*        showHeroes(superHeroes);
*           }
*/

/********** SECOND EXAMPLE RUN THROUGH **********/

//  set the responseType to RAW text and send() the request
request.responseType = 'text'; // now we're getting a string!
request.send();

//  run method and set RAW text to JSON.parse() 
request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

//  returning or populating to 'header'
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

//  createing the hero information cards
function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}