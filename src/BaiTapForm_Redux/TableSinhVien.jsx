import React, { Component } from "react";
import { connect } from "react-redux";

export class TableSinhVien extends Component {
  renderSinhVien = () => {
    let { arrsinhVien, sinhVien, arrSvSearch } = this.props;
    if (!arrSvSearch.length) {
      return arrsinhVien.map((sinhVien, index) => {
        return (
          <tr key={index}>
            <td>{sinhVien.maSV}</td>
            <td>{sinhVien.hoTen}</td>
            <td>{sinhVien.soDienThoai}</td>
            <td>{sinhVien.email}</td>
            <td>
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  const action = {
                    type: "XOA_SINH_VIEN",
                    payload: {
                      maSVClick: sinhVien.maSV,
                    },
                  };
                  this.props.dispatch(action);
                }}
              >
                <i className="fas fa-trash-alt" />
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  document.getElementById("submit").style.display = "none";
                  document.getElementById("button").style.display = "block";
                  document.getElementById("maSV").disabled = true;
                  const action = {
                    type: "SUA_SINH_VIEN",
                    payload: {
                      SVClick: sinhVien,
                    },
                  };
                  this.props.dispatch(action);
                }}
              >
                <i className="fas fa-pencil-alt" />
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return arrSvSearch.map((sinhVien, index) => {
        return (
          <tr key={index}>
            <td>{sinhVien.maSV}</td>
            <td>{sinhVien.hoTen}</td>
            <td>{sinhVien.soDienThoai}</td>
            <td>{sinhVien.email}</td>
            <td>
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  const action = {
                    type: "XOA_SINH_VIEN",
                    payload: {
                      maSVClick: sinhVien.maSV,
                    },
                  };
                  this.props.dispatch(action);
                }}
              >
                <i className="fas fa-trash-alt" />
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  document.getElementById("submit").style.display = "none";
                  document.getElementById("button").style.display = "block";
                  document.getElementById("maSV").disabled = true;
                  const action = {
                    type: "SUA_SINH_VIEN",
                    payload: {
                      SVClick: sinhVien,
                    },
                  };
                  this.props.dispatch(action);
                }}
              >
                <i className="fas fa-pencil-alt" />
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    // console.log(this.props.arrsinhVien);
    // console.log(this.props.arrSvSearch);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrsinhVien: state.QuanLySinhVienReducer.arrsinhVien,
  sinhVien: state.QuanLySinhVienReducer.sinhVien,
  arrSvSearch: state.QuanLySinhVienReducer.arrSvSearch,
});

export default connect(mapStateToProps)(TableSinhVien);
