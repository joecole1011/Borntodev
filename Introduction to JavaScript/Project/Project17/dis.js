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
       document.getElementById("per").innerHTML = "ลดไป " + per + " เปอร์เซ็น"

       disper = (sum * per) / 100
       document.getElementById("per-dis").innerHTML = "ส่วนลดที่ได้ " + disper.toFixed(2) + " บาท"

       total = sum - disper 
       document.getElementById("totalPer").innerHTML = "ราคาเมื่อคิดส่วนลดแล้ว " + total.toFixed(2) + " บาท" 