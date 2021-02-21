function toVat7(price) 
{
      
      let value =  (price *  7) / 100
      
      document.getElementById("price").innerHTML = "ราคาก่อนคิดภาษีมุลค่าเพิ่ม 7% " + " : " + price + " บาท"
      document.getElementById("vat").innerHTML = "ภาษีมูลค่าเพิ่ม 7% " + " : " + value + " บาท"
      
      total = parseInt(price) + parseInt(value)

      // console.log(total)

      document.getElementById("totalSum").innerHTML = "ราคารวมภาษีมูลค่าเพิ่ม 7% " + " : " + total.toFixed(2) + " บาท"

      return "ภาษีมูลค่าเพิ่ม 7% : " +  value.toFixed(2) + " บาท" 
      
      
}

function toVat9(price)
{
      let value =  (price *  9) / 100
      
      document.getElementById("price").innerHTML = "ราคาก่อนคิดภาษีมุลค่าเพิ่ม 9% " + " : " + price + " บาท"
      document.getElementById("vat").innerHTML = "ภาษีมูลค่าเพิ่ม 9% " + " : " + value + " บาท"
      
      total = parseInt(price) + parseInt(value)

      // console.log(total)

      document.getElementById("totalSum").innerHTML = "ราคารวมภาษีมูลค่าเพิ่ม 9% " + " : " + total.toFixed(2) + " บาท"

      return "ภาษีมูลค่าเพิ่ม 9% : " +  value.toFixed(2) + " บาท"  
}

function toVat7Program(value)
{
      alert(toVat7(value))
}

function toVat9Program(value)
{
      alert(toVat9(value))
}