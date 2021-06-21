// === var ===

/* 
- nó sẽ hiểu iNum (với giá trị 10) là iNum (với giá trị là 6)
- Khi log ra, nó sẽ log ra giá trị cuối cùng là 10
*/
var iNum = 6;

if (true) {
  var iNum = 10;
}

console.log(iNum); // result: 10

// === let ===
let iNum2 = 6;

if (true) {
  // biến let này sẽ được hoạt động trong scope if
  let iNum2 = 10;
  console.log("In scope If ", iNum2);
}

console.log(iNum2); // result: 6

// === const ===
const pi = 3.14;
//pi = 5; // không thể gán được vì đã khai báo const pi là một hằng số.

/* 
- Nếu hằng số là 1 object => Không thể gán bằng 1 object khác.
- Tuy nhiên: có thể set lại các giá trị cho các thuộc tính
*/
const object = { HoTen: "A", Tuoi: 18 };

object.HoTen = "Thu";

console.log(object);
// object = { HoTen: "B", Tuoi: 20 };
