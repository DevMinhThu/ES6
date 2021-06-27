import NhanVien from "./NhanVien";

class QuanLy extends NhanVien {
  dsPhongBan = [];

  constructor(maNV, tenNV, mangPhongBan) {
    super(maNV, tenNV);
    this.dsPhongBan = mangPhongBan;
  }
  tinhLuong() {
    return super.tinhLuong() + 1000;
  }
}

export default QuanLy;
