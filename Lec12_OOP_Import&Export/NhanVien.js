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

// Nếu export default => bên import có thể đặt tên tùy ý
// Ở vd này, bên import ta đặt tên là NhanVien123
export default NhanVien;
