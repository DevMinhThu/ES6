let listProduct = [
  { MaSp: 1, Ten: "Sony ABC", Gia: 100, HangSX: "Sony" },
  { MaSp: 2, Ten: "Iphone A", Gia: 200, HangSX: "Iphone" },
  { MaSp: 3, Ten: "Samsung C", Gia: 300, HangSX: "Samsung" },
  { MaSp: 4, Ten: "Sony XXX", Gia: 400, HangSX: "Sony" },
  { MaSp: 5, Ten: "Nokia W", Gia: 500, HangSX: "Nokia" },
  { MaSp: 6, Ten: "Sony R", Gia: 100, HangSX: "Sony" },
];

/* 
    - map cũng giống foreach
    - Nhưng khác ở chỗ hàm map có giá trị trả về là 1 mảng mới được tạo ra từ các đối tượng return trong callback func
    - So sánh với filter
    - Đối với filter, nếu thỏa mãn điều khiện trong hàm thì kết quả sẽ đc thêm vào mảng kết quả, nếu không thỏa mãn sẽ loại bỏ
    - Đối với map, dù có thỏa mãn đk hay không thì vẫn thêm hết vào mảng kết quả.
*/

let arr = listProduct.map((item, index) => {
  if (listProduct.MaSp % 2 === 0) {
    return item;
  }
  return 0;
});

console.log(arr);
