let listProduct = [
  { MaSp: 1, Ten: "Sony ABC", Gia: 100, HangSX: "Sony" },
  { MaSp: 2, Ten: "Iphone A", Gia: 200, HangSX: "Iphone" },
  { MaSp: 3, Ten: "Samsung C", Gia: 300, HangSX: "Samsung" },
  { MaSp: 4, Ten: "Sony XXX", Gia: 400, HangSX: "Sony" },
  { MaSp: 5, Ten: "Nokia W", Gia: 500, HangSX: "Nokia" },
  { MaSp: 6, Ten: "Sony R", Gia: 100, HangSX: "Sony" },
];

/* 
    - foreach nhận tham số đầu vào là từng phần tử của mảng và vị trí
    - foreach((item,index)=>{...})
    => thường thì foreach chỉ dùng để duyệt mảng console.log ra thôi
*/

listProduct.forEach((item, index)=>{
  console.log(index, item);
  // return item; // không trả về bất cứ cái gì
})
