function toCelsius()
{
   let fahrenheit = prompt("Fahrenheit:")
   let value = (fahrenheit - 32) * 5 / 9
   document.getElementById("answer_section").innerHTML = value.toFixed(2) + " °C" //แปลงจุดทศนิยม 
}
   toCelsius()