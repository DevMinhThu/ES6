// === sử dụng var ===
var mangButton = document.getElementsByTagName("button");

for (var i = 0; i < 3; i++) {
  mangButton[i].onclick = function () {
    alert(i); // result: 3
  };
}

// === sử dụng let ===
var mangButton = document.getElementsByTagName("button");

for (let i = 0; i < 3; i++) {
  mangButton[i].onclick = function () {
    alert(i); // result done
  };
}

/* khai báo let, biến đó chỉ được hoạt động trong scope */
