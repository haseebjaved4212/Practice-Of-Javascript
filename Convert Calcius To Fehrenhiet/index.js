function convert() {
  let celcius = document.getElementById('data').value;
  let fahrenheit = (celcius * 1.8) + 32;
  document.getElementById('res').innerHTML = fahrenheit +" Fahrenheit";


} 
