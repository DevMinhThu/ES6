/* === CÚ PHÁP PROTOTYPE - ES5 === */

/* 
- mahs, tenhs: là 2 tham sô của class HocSinh
- khi truyền giá trị vào, thì nó chính là giá trị của class
*/
function HocSinh(mahs, tenhs) {
  this.MaHs = mahs;
  this.HoTen = tenhs;

  // phương thức
  this.xuatThongTin = function () {
    console.log(this.MaHs, this.HoTen);
  };
}

/* 
- mahs: sẽ nhận được giá trị truyền vào là 1
- tenhs: sẽ nhận được giá trị truyền vào là Vu Minh Thu
*/
let hs = new HocSinh(1, "Vu Minh Thu");
console.log(hs);

/* === ES6 === */
class HocSinh2 {
  // khai báo thuộc tính
  MaHs;
  HoTen;
  // thay vì là () giống như là ES5, thay vào đó là constructor
  // constructor: là hàm khởi tạo ban đàu
  constructor(mahs, tenhs) {
    // gán giá trị khi khởi tạo
    this.MaHs = mahs;
    this.HoTen = tenhs;
  }

  /* Phương thức có 2 cách 
  - C1: Sử dụng arrow function
  - C2: Khai báo bình thường
  */
  // xuatThongTin = () => {
  //   console.log(this.MaHs, this.HoTen);
  // };

  xuatThongTin() {
    console.log(this.MaHs, this.HoTen);
  }
}

let hs1 = new HocSinh2(2, "Vu Gia Khiem");
hs1.xuatThongTin();
