function getEle(id) {
  return document.getElementById(id);
}
var dsnv = new QuanLiNhanVien();
var validate = new Validation();

const minLuong = 1000000;
const maxLuong = 20000000;
const minGioLam = 80;
const maxGioLam = 200;

function layThongTinNhanVien(isAdd) {
  var _taiKhoan = getEle("tknv").value;
  var _hoVaTen = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  isValid = true;

  if (isAdd) {
    isValid &=
      validate.kiemTraRong(
        _taiKhoan,
        "tbTKNV",
        "(*) vui lòng nhập tài khoản"
      ) &&
      validate.kiemTraTaiKhoan(
        _taiKhoan,
        "tbTKNV",
        "(*) tài khoản nhập từ 4-6 ký số",
        4,
        6
      ) &&
      validate.kiemTraTrungMaNhanVien(
        _taiKhoan,
        "tbTKNV",
        "(*) tài khoản bị trùng",
        dsnv.array
      );
  }
  isValid &=
    validate.kiemTraRong(_hoVaTen, "tbTen", "(*) vui lòng nhập họ và tên") &&
    validate.kiemTraTenNhanVien(_hoVaTen, "tbTen", "(*) họ và tên phải là chữ");

  isValid &=
    validate.kiemTraRong(_email, "tbEmail", "(*) vui lòng nhập email") &&
    validate.kiemTraEmail(_email, "tbEmail", "(*) vui lòng nhập email");

  isValid &=
    validate.kiemTraRong(
      _matKhau,
      "tbMatKhau",
      "(*) vui lòng nhập mật khẩul"
    ) &&
    validate.kiemTraMatKhau(
      _matKhau,
      "tbMatKhau",
      "(*) vui lòng nhập mật khẩu từ 6-10 ký tự (ít nhất 1 ký tự số, 1 in hoa, 1 đặc biệt)",
      6,
      10
    );

  isValid &=
    validate.kiemTraRong(_ngayLam, "tbNgay", "(*) vui lòng nhập ngày tháng") &&
    validate.kiemTraNgayLam(
      _ngayLam,
      "tbNgay",
      "(*) ngày tháng theo định dạng mm/dd/yyyy"
    );

  isValid &=
    validate.kiemTraRong(
      _luongCB,
      "tbLuongCB",
      "(*) vui lòng nhập lương cơ bản"
    ) &&
    validate.kiemTraLuongCoBan(
      _luongCB,
      "tbLuongCB",
      "(*) vui lòng nhập lương từ 5tr đến 20tr",
      minLuong,
      maxLuong
    );

  isValid &= validate.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) vui lòng chọn chức vụ"
  );

  isValid &=
    validate.kiemTraRong(_gioLam, "tbGiolam", "(*) vui lòng nhập số giờ làm") &&
    validate.kiemTraGioLam(
      _gioLam,
      "tbGiolam",
      "(*) vui lòng nhập số giờ làm từ " + minGioLam + " đến " + maxGioLam,
      minGioLam,
      maxGioLam
    );

  if (isValid) {
    var nhanVien = new NhanVien(
      _taiKhoan,
      _hoVaTen,
      _email,
      _matKhau,
      _ngayLam,
      _luongCB,
      _chucVu,
      _gioLam
    );
    return nhanVien;
  }
  return null;
}
