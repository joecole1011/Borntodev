let round = prompt ("คุณจะเล่นทั้งหมดกี่รอบ")
let sum_round = 1
 let sum_answer = 0
for (var i = 1; i <= round ; i++) {
      var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !") 
      var random_answer = ""
         // Math.floor(Math.random * 10) สุ่มเลข แล้วปัดเศษออก
      if (Math.floor(Math.random()*10) <= 4 ) {
            //หัว
            random_answer = "หัว"
      } else {
         //ก้อย
            random_answer = "ก้อย"
      }
      if (answer == random_answer ) {
         alert("ตอบถูก ! ยินดีด้วย")
         sum_answer =  sum_answer + sum_round
         // console.log(i);   
         
      } 
      else { 
         alert("ตอบผิด ! เสียใจด้วย")
      }

      document.getElementById("game-list").innerHTML += "ครั้งที่ " + i + " คุณตอบ " + answer + " : " + "คำตอบคือ " + random_answer + "<br>"
      // console.log(random_answer+ " : " + answer);
}
      //รวมคะแนน
      document.getElementById("result").innerHTML = "คะแนนรวม " + sum_answer + " คะแนน"


      //for วนซ้ำที่แน่นอน while วนซ้ำที่ไม่แน่นอน

// let round = prompt ("คุณจะเล่นทั้งหมดกี่รอบ")
// for (var i = 0; i < round ; i++) {
//       var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !") 
//       var random_answer = ""
//          // Math.floor(Math.random * 10) สุ่มเลข แล้วปัดเศษออก
//       if (Math.floor(Math.random()*10) <= 4 ) {
//             //หัว
//             random_answer = "หัว"
//       } else {
//          //ก้อย
//             random_answer = "ก้อย"
//       }
//       if (answer == random_answer ) {
//          alert("ตอบถูก ! ยินดีด้วย")
//       } 
//       else { 
//          alert("ตอบผิด ! เสียใจด้วย")
//       }
//       console.log(random_answer+ " : " + answer);
// }