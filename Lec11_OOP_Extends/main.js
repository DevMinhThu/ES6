/* Kế thùa */
class NhanVien {
  maNV;
  tenNV;
  constructor(maNV, tenNV) {
    this.maNV = maNV;
    this.tenNV = tenNV;
  }
  tinhLuong() {
    return 1000;
  }
}
/* Lớp QuanLy kế thừa lớp NhanVien
- sẽ lấy được tất cả thuộc tính của lớp con để sử dụng 
=> phải định nghĩa lại constructor
*/
class QuanLy extends NhanVien {
  dsPhongBan = [];

  /* 
  - định nghĩa lại constructor.
  => bắt buộc phải sử dụng từ khóa supper()
  - lớp cha có những tham số gì
  => lớp con bắt buộc phải có các tham số đó
  - có thể thêm tham số khác cho lớp con
  */
  constructor(maNV, tenNV, mangPhongBan) {
    super(maNV, tenNV);
    this.dsPhongBan = mangPhongBan;
  }
  // phương thức tinhLuong của lớp con
  tinhLuong() {
    // supper.tinhLuong(); cú pháp gọi lại phương thức tính lương của lớp cha
    return super.tinhLuong() + 1000;
  }
}
// khởi tạo đối tượng
let qly = new QuanLy(1, "Vu Minh Thu", [{ maPB: 1, tenPB: "CNTT" }]);
console.log(qly);
