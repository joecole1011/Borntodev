function toCelsius() //ฟังชั่นมีหน้าที่ทำงานให้เสร็จแล้วจบการทำงาน
{
   let fahrenheit = prompt("Fahrenheit:")
   let value = (fahrenheit - 32) * 5 / 9
   document.getElementById("toCelsius").innerHTML = value.toFixed(2) + " °C" //แปลงจุดทศนิยม 
}
function toFahrenheit()
{
   let celsius = prompt("celsius:")
   let value = (celsius * 9) / 5 + 32
   document.getElementById("toFahrenheit").innerHTML = value.toFixed(2) + " °F" //แปลงจุดทศนิยม 
}

toCelsius()
toFahrenheit()