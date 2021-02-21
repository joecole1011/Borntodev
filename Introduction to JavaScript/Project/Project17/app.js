// โปรแกรมคำนวณอุณหภูมิ
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

// โปรแกรมคำนวณค่าอาหาร
let qrt = prompt("ใส่จำนวนสินค้า")
let sum = 0
   for(var i = 1 ; i <= qrt ; i++){
      // console.log(i)
         // console.log(i+1)
        
         let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
         sum = sum + parseInt(item_price)
         // document.getElementById("price-list").innerHTML += item_price // เพิ่มบรรทัดลงไปเรื่อยๆ <br>
         document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + item_price + " บาท" + "<br>"
         // document.getElementById("result").innerHTML = "ราคารวม " + sum + " บาท"
   }
      document.getElementById("result").innerHTML = "ราคารวม " + sum + " บาท"

// โปรแกรมคิดคำนวณส่วนลด

function discount{
   let qrt = prompt("ใส่จำนวนสินค้า")
   let sum = 0
   let disper = 0
   let total = 0
   for(var i = 1 ; i <= qrt ; i++){

         let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
         sum = sum + parseInt(item_price)
         // document.getElementById("price-list").innerHTML += item_price // เพิ่มบรรทัดลงไปเรื่อยๆ <br>
         document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + item_price + " บาท" + "<br>"
         // document.getElementById("result").innerHTML = "ราคารวม " + sum + " บาท"
   }
      document.getElementById("result").innerHTML = "ราคารวม " + sum + " บาท"
      let per = prompt("ใส่เปอร์เซ็นต์ส่วนลด")
      disper = (sum * per) / 100
      total = sum - disper 




}




// วิธีที่ 1 

// เอาราคาเต็ม คูณ ส่วนลด(%)  แล้วหารด้วย 100  จะเท่ากับส่วนที่ลดไป แล้วก็เอาราคาเต็ม – ส่วนที่ลดไป = ราคาที่ต้องจ่าย

// เช่น ถ้าของราคา 250 ติดป้ายลด 80%

// ก็ให้เอา 250 * 80 = 20,000 เอามาหารด้วย 100 จะได้เท่ากับ 200 หลังจากนั้นก็ 250 – 200 บาท = 50 บาท

// วิธีที่ 2

// ให้คิดราคาจ่ายเลยค่ะ เช่น ลด 80% แปลว่าจ่ายแค่ 20%

// นำราคาของจริง 250 คูณ 20 หาร 100 = 50







//โปรแกรมพิมพ์ Exit ถึงออก
// while(prompt("ถ้าจะออกพิมพ์ Exit") != "Exit"){
   // document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" +"<br>"
// prompt("ถ้าจะออกพิมพ์ Exit")
// console.log("Hello");
// }

