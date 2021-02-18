 function sayHello(userName, userLastname)  // พารามิเตอร์ คือ ตัวแปร (userName, userLastname) เกิดมาพร้อมกับฟังชั่น ทำงานภายในฟังชั่น
 //อากิวเมน คือ ข้อมูลส่งให้ฟังชั่น
 {
   
  return "Hello " + userName + "  " + userLastname   //เห็นตัวนี้ จะหยุดการทำงาน โยนข้อมูลกลับไป

 }
function getAge()
{
   return 28
}

let userInput = prompt("Input you name :")
let lastInput = prompt("Input lastname: ")

//อากิวเมน คือ ข้อมูลส่งให้ฟังชั่น (userInput, lastInput)
alert(sayHello(userInput, lastInput)) //ทำงานบรรทัดที่  11 ก่อน แล้วเข้าไปใน sayHello ส่งข้อมูล ลำดับความสำคัญ
 

// alert(sayHello("Kimzun")) //ทำงานบรรทัดที่  11 ก่อน แล้วเข้าไปใน sayHello ส่งข้อมูล
// alert(getAge() + 10)
// alert("Kim")
// prompt("kim")

// console.log("Kim");

//  alert(sayHello())
//  alert(getAge())
//  alert(typeof sayHello())
//  alert(typeof getAge())
 