// === sử dụng ES5 function ===
let hocVien = {
  hoTen: "Nguyen Van A",
  lop: "Front End",
  layThongTinHocVien: function () {
    function hienThiThongTin() {
      // con trỏ this ở đây nó sẽ hiểu là ngữ cảnh của window ==> cho ra sai kết quả
      console.log("Ho ten: " + this.hoTen + " Lop: " + this.lop);
    }
    hienThiThongTin();
  },
};

hocVien.layThongTinHocVien(); // result: undefined

// === sử dụng ES6 arrow function ===
let hocVien = {
  hoTen: "Nguyen Van A",
  lop: "Front End",
  layThongTinHocVien: function () {
    let hienThiThongTin = () => {
      // khi sử dụng arrow function thì nó sẽ hiểu ngữ cảnh con trỏ this chính là đối tượng hocVien mà ta khai báo
      console.log("Ho ten: " + this.hoTen + " Lop: " + this.lop);
    };
    hienThiThongTin();
  },
};

hocVien.layThongTinHocVien(); // result done
