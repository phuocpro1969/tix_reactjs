import axios from "axios";
function handleUserLoginRequest(user, history) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then(function (ress) {
        // dispatch(GetListCinemaBrandSuccess(ress.data));
        localStorage.setItem("user", JSON.stringify(ress.data));
        dispatch(saveUserLogin(ress.data.taiKhoan));
        history.push("/");
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(saveUserLoginFailed(err));
        // console.log(err);
      });
  };
}
function saveUserLogin(data) {
  return {
    type: "SAVE_USER_LOGIN_SUCCESS",
    payload: data,
  };
}
function saveUserLoginFailed(err) {
  return {
    type: "SAVE_USER_LOGIN_FAILED",
    payload: err,
  };
}
function GetInfoByLogout(data) {
  return {
    type: "SAVE_USER_LOGOUT",
    payload: data,
  };
}

function RegMemberFromForm(user, history) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    })
      .then(function (ress) {
        console.log(ress.data);
        dispatch(ResetErMess(null));
        history.goBack();
      })
      .catch(function (err) {
        console.log(err.response.data);
        dispatch(showErrUserReg(err.response.data));
        // console.log(err);
      });
  };
}
function showErrUserReg(err) {
  return {
    type: "SHOW_ERROR_MESS_BY_REG",
    payload: err,
  };
}
function ResetErMess(err) {
  return {
    type: "RESET_ERR_MESS",
    payload: err,
  };
}
export { handleUserLoginRequest };
export { GetInfoByLogout };
export { RegMemberFromForm };
export { ResetErMess };
