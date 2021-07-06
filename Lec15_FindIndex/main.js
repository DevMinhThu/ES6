let listProduct = [
  { MaSp: 1, Ten: "Sony ABC", Gia: 100, HangSX: "Sony" },
  { MaSp: 2, Ten: "Iphone A", Gia: 200, HangSX: "Iphone" },
  { MaSp: 3, Ten: "Samsung C", Gia: 300, HangSX: "Samsung" },
  { MaSp: 4, Ten: "Sony XXX", Gia: 400, HangSX: "Sony" },
  { MaSp: 5, Ten: "Nokia W", Gia: 500, HangSX: "Nokia" },
  { MaSp: 6, Ten: "Sony R", Gia: 100, HangSX: "Sony" },
];

/* 
    - Hàm findIndex kết quả trả về là chỉ số của phần tử trong mảng
*/

const index = listProduct.findIndex((sp) => sp.MaSp === 3);

console.log(index); // result: 2
