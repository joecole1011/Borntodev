function toFahrenheit()
{
   let celsius = prompt("celsius:")
   let value = (celsius * 9) / 5 + 32
   document.getElementById("answer_section").innerHTML = value.toFixed(2) + " °F" //แปลงจุดทศนิยม 
}
toFahrenheit()