import React, { Component } from "react";
import { connect } from "react-redux";

export class FormSinhVien extends Component {
  state = {
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  handelChange = (e) => {
    // //
    let tagInput = e.target;
    let { name, value, type, pattern, id } = tagInput;
    let datatype = e.target.getAttribute("data-type");
    // console.log(name, value);
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = name + " không được bỏ trống !";
    } else {
      // check mail
      if (datatype === "email") {
        let regex = new RegExp(pattern);
        if (!regex.test(value.toString())) {
          errorMessage = name + " không đúng định dạng !";
        }
      }
      // check phone
      if (datatype === "soDienThoai") {
        let regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMessage = name + " không đúng định dạng !";
        }
      }
    }
    // //
    let errors = { ...this.state.errors, [id]: errorMessage };
    this.setState({
      errors: errors,
    });
    // //
    const action = {
      type: "HANDEL_CHANGE_INPUT",
      id: e.target.id,
      value: e.target.value,
    };
    console.log(action);
    this.props.dispatch(action);
  };

  render() {
    let { sinhVien, arrsinhVien } = this.props.QuanLySinhVienReducer;
    // console.log(sinhVien, arrsinhVien);
    return (
      <div className="container">
        <div className="card text-left rounded-0">
          <div className="card-header bg-dark text-white rounded-0">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                let arrSinhVienUpdate =
                  this.props.QuanLySinhVienReducer.arrsinhVien;
                for (let key of arrSinhVienUpdate) {
                  if (key.maSV.toString() === sinhVien.maSV) {
                    return alert("Mã SV đã tồn tại !");
                  }
                }
                if (
                  !sinhVien.maSV ||
                  !sinhVien.hoTen ||
                  !sinhVien.soDienThoai ||
                  !sinhVien.email
                ) {
                  return alert("Thông tin sinh viên không được để trống !");
                }
                const action = {
                  type: "HANDLE_SUBMIT",
                  sinhVien: sinhVien,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <input
                    placeholder="Mã sinh viên"
                    className="form-control"
                    id="maSV"
                    type="text"
                    name="Mã sinh viên"
                    value={sinhVien.maSV}
                    onChange={this.handelChange}
                  />
                  <span className="text-danger">{this.state.errors.maSV}</span>
                </div>
                <div className="form-group col-6 mt-3">
                  <input
                    placeholder="Tên sinh viên"
                    className="form-control"
                    id="hoTen"
                    type="text"
                    name="Tên Sinh Viên"
                    value={sinhVien.hoTen}
                    onChange={this.handelChange}
                  />
                  <span className="text-danger">{this.state.errors.hoTen}</span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <input
                    placeholder="Số điện thoại"
                    className="form-control"
                    id="soDienThoai"
                    type="text"
                    data-type="soDienThoai"
                    name="Điện thoại"
                    value={sinhVien.soDienThoai}
                    pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                    onChange={this.handelChange}
                  />
                  <span className="text-danger">
                    {this.state.errors.soDienThoai}
                  </span>
                </div>
                <div className="form-group col-6 mt-3">
                  {/* <span>Email</span> */}
                  <input
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    type="email"
                    data-type="email"
                    name="Email"
                    value={sinhVien.email}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    onChange={this.handelChange}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-left">
                  <button id="submit" type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    type="button"
                    id="button"
                    style={{ display: "none" }}
                    onClick={() => {
                      const action = {
                        type: "CAP_NHAT_SV",
                        sinhVien: sinhVien,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group col-9 ">
                  <input
                    // style={{boxShadow: 'none'}}
                    className="form-control me-1 search search rounded-pill border border-secondary"
                    type="search"
                    placeholder="Tìm sinh viên ..."
                    aria-label="Search"
                    onChange={(e) => {
                      const action = {
                        type: "SEARCH",
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
                    }}
                  />
                </div>
                <div className="form-group col-3">
                  <button
                    type="button"
                    className="btn btn-outline-info rounded-circle"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  QuanLySinhVienReducer: state.QuanLySinhVienReducer,
});

export default connect(mapStateToProps)(FormSinhVien);
