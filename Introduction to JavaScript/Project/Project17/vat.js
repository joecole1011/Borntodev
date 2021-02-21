function toVat7(price) 
{
   let value =  (price *  7) / 100
   return value.toFixed(2) + " บาท" 
}

function toVat9(price)
{
   let value =  (price *  9) / 100
   return value.toFixed(2) + " บาท" 
}

function toVat7Program(value)
{
    alert(toVat7(value))
}

function toVat9Program(value)
{
    alert(toVat9(value))
}








// function toCelsius(fahrenheit) 
// {
//    let value = (fahrenheit - 32) * 5 / 9
//    return value.toFixed(2) + " °C" //แปลงจุดทศนิยม 
// }

// function display(elemenId, value)
// {
//    document.getElementById(elemenId).innerHTML = "<i>" +  value + "</i>"
// }

// function toFahrenheit(celsius)
// {
//    let value = (celsius * 9) / 5 + 32
//    return value.toFixed(2) + " °F" //แปลงจุดทศนิยม 
// }
// function toCelsiusProgram(value)
// {
//     alert(toCelsius(value))
// }

// function toFahrenheitProgram(value)
// {
//     alert(toFahrenheit(value))
// }