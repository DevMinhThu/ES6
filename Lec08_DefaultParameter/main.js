/* 
- Khi không truyền đối số, hàm sẽ lấy tham số mặc định để tính toán.
- Nó sẽ thay thế từ trái sang phải
- Tham số mặc định luôn nằm bên phải
- Tham số thứ 3 được sử dụng 2 tham số phía trước
*/

function tinhTong(a = 5, b = 10, c = a + b) {
  console.log(a + b + c);
  return a + b;
}

/* 
- TH: Nếu không truyền đối số vào khi gọi hàm 
=> sẽ lấy tham số gắn mặc định để tính
*/
tinhTong(); // result: 30

/* 
- nó sẽ lấy đối số 10 tương ứng với tham số a (mặc đinh là 5) để tính
=> kết quả 20
- a = 20, b = 10, c = 20 + 10
*/
tinhTong(20); // result: 60
