var requestURL = 'https://github.com/Wood-Benjamin/Wood-Benjamin.github.io/blob/master/assignments/Final%20Project/data/services.json';

var servicesRequest = new XMLHttpRequest;
servicesRequest.open('GET',requestURL);
servicesRequest.send();

servicesRequest.onload = function() {
    var fr_servicesInfo = JSON.parse(servicesRequest.responseText);
    console.log(fr_servicesInfo);
    
    // service name
    document.getElementById('name').innerHTML = fr_servicesInfo.name;
    
    //  service description
    document.getElementById('includes').innerHTML = fr_servicesInfo.includes;
    //  service price
    document.getElementById('price').innerHTML = fr_servicesInfo.price;