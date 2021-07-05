let listProduct = [
  { MaSp: 1, Ten: "Sony ABC", Gia: 100, HangSX: "Sony" },
  { MaSp: 2, Ten: "Iphone A", Gia: 200, HangSX: "Iphone" },
  { MaSp: 3, Ten: "Samsung C", Gia: 300, HangSX: "Samsung" },
  { MaSp: 4, Ten: "Sony XXX", Gia: 400, HangSX: "Sony" },
  { MaSp: 5, Ten: "Nokia W", Gia: 500, HangSX: "Nokia" },
  { MaSp: 6, Ten: "Sony R", Gia: 100, HangSX: "Sony" },
];

// Lấy ra sản phẩm thuộc hãng sony?
// Thay vì sử dụng for để duyệt mảng và truy suất ra HangSX để so sánh lấy giá trị
// => ta sử dụng hàm filter xử lý nhanh hơn

/* 
    - Hàm filter kết quả trả về là một mảng mới.
*/

const MangDienThoaiSony = listProduct.filter((sp) => sp.HangSX === "Sony");

console.log(MangDienThoaiSony);
