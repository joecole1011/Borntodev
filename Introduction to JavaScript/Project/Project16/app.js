function toCelsius(fahrenheit) //ฟังชั่นมีหน้าที่ทำงานให้เสร็จแล้วจบการทำงาน 
//หน้าที่แปลงหน่อย ก็แปลงหน่วย แสดงออกหน้าจอก็แสดงออกหน้าจอ
{
   let value = (fahrenheit - 32) * 5 / 9
   return value.toFixed(2) + " °C" //แปลงจุดทศนิยม 
}

function display(elemenId, value)
{
   document.getElementById(elemenId).innerHTML = "<i>" +  value + "</i>"
}

function toFahrenheit(celsius)
{
   let value = (celsius * 9) / 5 + 32
   return value.toFixed(2) + " °F" //แปลงจุดทศนิยม 
}
function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}

function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}
 


