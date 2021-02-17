let lotto_number = prompt("กรอกเลขที่ต้องการซื้้อ :")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
if (lotto_number == random_number) {
    // console.log("โชคดีด้วยคุณถูกรางวัล!!!");
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล เลขท้าย 3 ตัว"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล เลขท้าย 3 ตัว"

}

// if จะทำงานก็ตัวเมื่อเข้าเงื่อนไข ถ้าไม้เข้าเงื่อนไขมันจะข้ามไปเลย หรือถ้าเช้าเงื่อนไชใดแล้ว เงื่อนไขตัวถัดไปจะข้ามไปเลย 
// else if

// console.log(lotto_number);
// console.log(Math.floor(Math.random() * 100))
// document.getElementById("buy_lotto").innerHTML = lotto_number
// ส่งค่า ไปที่ index.html 


// ส่งค่า ไปที่ index.html 


//  var name = prompt("กรอกชื่ิอสิจ๊ะ")
//  console.log("Hello " + name )

// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// alert("Test")
// var name = "Kim" 
// console.log(name)

// name = "Pop"     
// console.log(name)

// name = "Jame"     
// console.log(name)

// var firstname = "Akawit"
// var lastname = "Nasoke"
// console.log(firstname)
// console.log(lastname)
// alert(firstname)
// alert(lastname)
// alert(typeof firstname) //ตรวจสอบประเภทตัวแปร

// console.log(10+2)
// console.log(10*2)
// console.log(10-5)
// console.log(10/5)

// console.log("Hello " + " Kim")

// var age = 12 + 10
// console.log(age)

// console.log("Hello" + "Kim")
// var name = "Kim" + "Kim"
// console.log(name);
// var age = (4+2*2/2*2+4+1-5+19)+91
// {
//     var x = 20
//     let y = 15 // ใช้งานได้ในปีกกาเท่านั้น
//     alert(y) 
// }
// var x = 20
// {
//     var x = 100
//     let y = 15
// }
// console.log(x)