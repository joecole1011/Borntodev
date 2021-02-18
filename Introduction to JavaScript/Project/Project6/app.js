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


   // let qrt = prompt("ใส่จำนวนสินค้า")
   // for(var i = 0 ; i < qrt ; i++){
   //    // console.log(i)
   //       // console.log(i+1)
        
   //       let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
   //       document.getElementById("price-list").innerHTML += item_price

   // }