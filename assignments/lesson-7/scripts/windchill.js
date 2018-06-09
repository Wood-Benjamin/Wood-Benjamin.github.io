// f equals wind chill factor
// t equals average air temperature in Fahrenheit
// s equals wind speed in miles per hours
// compute wind chill with formula "f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16"
// display wind chill to user
{
var t = 70;
var s = 10;
var y = Math.pow(s, 0.16);
var f = 35.74 + 0.6215 * t - 35.75 * y + 0.4275 * t * y;
var x = f.toFixed(2);
document.getElementById('windchill').innerHTML = "WindChill Factor: " + x + "&deg;F";
}