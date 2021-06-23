let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7];

/* ĐỐI VỚI ARR
- thêm giá trị số 8 vào mảng
= Cách hoạt động =
b1: tạo ra mảng mới là mangMoi.
b2: lấy tất cả giá trị của mangSoNguyen, qua cú pháp ...mangSoNguyen. 
b3: đưa giá trị lấy được vào mangMoi
b4: ,8 để thêm giá trị 8 vào mảng 
// Khi thao tác với giá trị của mangMoi sẽ không ảnh hưởng và làm thay đổi giá trị của mảng cũ (mangSoNguyen)
*/
let mangMoi = [...mangSoNguyen, 8];

console.log(mangMoi);

/* ĐỐI VỚI OBJECT
- TƯƠng tự như mảng
*/
let hs1 = { MaHs: 1, TenHs: "A" };
let hs2 = { ...hs1 };
hs2.TenHs = "b";
