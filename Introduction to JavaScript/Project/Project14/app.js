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

// function display2(elemenId2, value2)
// {
//    document.getElementById(elemenId2).innerHTML =value2
// }

alert(toCelsius(150))
display("toCelsius", toCelsius(150))

alert(toFahrenheit(200))
display("toFahrenheit", toFahrenheit(200))


// alert(toFahrenheit(200))
// display2("toFahrenheit", toFahrenheit(200))

// toFahrenheit()