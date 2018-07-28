var requestURL = 'https://Wood-Benjamin.github.io/assignments/Final-Project/data/services.json';

var servicesRequest = new XMLHttpRequest;
servicesRequest.open('GET',requestURL);
servicesRequest.responseType = 'text';
servicesRequest.send();

servicesRequest.onload = function() {
    var servicesText = servicesRequest.response;
    var servicesInfo = JSON.parse(servicesText);
    console.log(servicesInfo);
    
    // service name
    
    document.getElementById('name').innerHTML = servicesInfo.name;
    
    //  service description
    document.getElementById('includes').innerHTML = servicesInfo.includes;
    //  service price
    document.getElementById('price').innerHTML = servicesInfo.price;
}