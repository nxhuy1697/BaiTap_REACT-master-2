const stateDefault = {
  arrsinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyen Xuan Huy",
      soDienThoai: "787878787878",
      email: "nxhuy@gmail.com",
    },
    {
      maSV: 2,
      hoTen: "Nguyen Dang Hoang Nam",
      soDienThoai: "08123123",
      email: "namkhung@gmail.com",
    },
  ],
  sinhVien: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },

  arrSvSearch: [],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDEL_CHANGE_INPUT": {
      let { id, value } = action;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }

    case "HANDLE_SUBMIT": {
      // lấy dữ liệu từ action ra
      let { sinhVien } = action;
      // clone state
      let arrSinhVienUpdate = [...state.arrsinhVien];
      arrSinhVienUpdate.push(sinhVien);
      // cập nhật lại state
      state.arrsinhVien = arrSinhVienUpdate;
      return { ...state };
    }

    case "XOA_SINH_VIEN": {
      // lấy dữ liệu từ action ra
      let { maSVClick } = action.payload;
      // clone state
      let arrSinhVienUpdate = [...state.arrsinhVien];
      // xoá sv bằng hàm filter
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sv) => sv.maSV !== maSVClick
      );
      // cập nhật lại state
      return { ...state, arrsinhVien: arrSinhVienUpdate };
    }

    case "SUA_SINH_VIEN": {
      let { SVClick } = action.payload;
      // console.log('sinhVien',SVClick)
      let sinhVienEdit = { ...state.sinhVien };
      sinhVienEdit = SVClick;
      // console.log(sinhVienEdit)
      return { ...state, sinhVien: sinhVienEdit };
    }

    case "CAP_NHAT_SV": {
      let { sinhVien } = action;
      let arrSinhVienUpdate = [...state.arrsinhVien];

      arrSinhVienUpdate.map((item, index) => {
        if (sinhVien.maSV === item.maSV) {
          arrSinhVienUpdate.splice(index, 1, sinhVien);
        }
      });
      return { ...state, arrsinhVien: arrSinhVienUpdate };
    }

    case "SEARCH": {
      let { value } = action;
      //   console.log(value);
      let arrSvUpdate = [...state.arrsinhVien];
      arrSvUpdate = arrSvUpdate.filter(
        (sv) =>
          sv.maSV.toString().trim() === value ||
          sv.hoTen.trim().toLowerCase().includes(value)
      );

      return { ...state, arrSvSearch: arrSvUpdate };
    }

    default:
      return state;
  }
};
