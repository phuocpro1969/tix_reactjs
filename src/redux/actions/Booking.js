import axios from "axios";
import swal from "sweetalert";
function getBookingRequest(codeShowTime) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${codeShowTime}`,
      data: null,
    })
      .then(function (ress) {
        dispatch(getBookingSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(getBookingFailed(err));
        // console.log(err);
      });
  };
}
function getBookingSuccess(data) {
  return {
    type: "GET_BOOKING_SUCCESS",
    payload: data,
  };
}
function getBookingFailed(err) {
  return {
    type: "GET_BOOKING_FAILED",
    payload: err,
  };
}
export { getBookingRequest };

function activeSeat(data) {
  return {
    type: "CHOOSE_SEAT",
    payload: data,
  };
}
export { activeSeat };
function postBookingTicketRq(maLichChieu, danhSachVe, history) {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(function (ress) {
        console.log(ress.data);
        swal({
          title: ress.data,
          icon: "success",
          button: true,
        }).then(() => {
          history.push("/");
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}
export { postBookingTicketRq };
function ResetActiveNotify(data) {
  return {
    type: "RESET_NOTIFY",
    payload: data,
  };
}
export { ResetActiveNotify };
