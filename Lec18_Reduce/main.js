let listProduct = [
  { MaSp: 1, Ten: "Sony ABC", Gia: 100, HangSX: "Sony" },
  { MaSp: 2, Ten: "Iphone A", Gia: 200, HangSX: "Iphone" },
  { MaSp: 3, Ten: "Samsung C", Gia: 300, HangSX: "Samsung" },
  { MaSp: 4, Ten: "Sony XXX", Gia: 400, HangSX: "Sony" },
  { MaSp: 5, Ten: "Nokia W", Gia: 500, HangSX: "Nokia" },
  { MaSp: 6, Ten: "Sony R", Gia: 100, HangSX: "Sony" },
];

/* 
    REDUCE
    - nếu có giá trị khởi tạo => tham số đầu tiên trong callback là giá trị thứ nhất trong mảng.
    - nếu có giá trị khởi tạo => tham số đầu tiên là giá trị khởi tạo.
*/

// Duyệt mảng tính tổng giá sản phẩm
let tongTien = listProduct.reduce((tt, item, index) => {
  return (tt += item.Gia);
}, 0);

console.log(tongTien);

// kết quả trả về của reduce rất đa dạng
// ví dụ trả về 1 mảng mới
/* 
  - Gía trị khởi tạo là mảng rỗng
*/
let mangDienThoai = listProduct.reduce((dtSony, item, index) => {
  if (item.HangSX === "Sony") {
    dtSony.push(item);
  }
  return dtSony;
}, []);

console.log(mangDienThoai);
