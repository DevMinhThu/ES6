var a = 10;

(function () {
  // phạm vi sử dụng của biến a chỉ sử dụng bên trong function.
  // bién a trong function scope này có thể sử dụng được giá trị ở bên ngoài
  var a = 0;
  console.log("In scope", a);
});

// không sử dụng được bên ngoài như này
// sẽ bị lỗi: biến a chưa được khai báo
console.log("Out scope", a);

// === biến a trong function scope này có thể sử dụng được giá trị ở bên ngoài ===
var a = 10;

var functionA = function () {
  /* 
  - nếu trong function scope khai báo: var = 0
  - sẽ được hiểu là biến a = 10 bên ngoài sẽ được gán lại giá trị = 0 
  */
  //   var a = 0;
  console.log("In scope", a); // result: 10
};

functionA();

// Bên trong sử dụng được bên ngoài
// Bên ngoài không sử dụng được bên trong
