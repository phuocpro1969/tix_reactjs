import axios from "axios";
function GetListMovieTheaterByIdRequest(id) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      data: null,
    })
      .then(function (ress) {
        dispatch(GetListMovieTheaterByIdSuccess(ress.data));
      })
      .catch(function (err) {
        dispatch(GetListMovieTheaterByIdFailed(err));
      });
  };
}
function GetListMovieTheaterByIdSuccess(data) {
  return {
    type: "GET_MOVIETHEATER_SUCCESS",
    payload: data,
  };
}
function GetListMovieTheaterByIdFailed(err) {
  return {
    type: "GET_MOVIETHEATER_FAILED",
    payload: err,
  };
}
export { GetListMovieTheaterByIdRequest };
function resetTimeByTheater(status) {
  return {
    type: "RESET_TIME_BY_THEATER",
    status: status,
  };
}
function showNameTheaterOnMenu(data) {
  return {
    type: "SHOW_NAME_THEATER_ON_MENU",
    payload: data,
  };
}
export { showNameTheaterOnMenu };
export { resetTimeByTheater };
function resetDateByTheater(status) {
  return {
    type: "RESET_DATE_BY_THEATER",
    status: status,
  };
}
export { resetDateByTheater };
function getDateShowTime(nameTheater) {
  return {
    type: "GET_DATE_SHOWTIME",
    payload: nameTheater,
  };
}
export { getDateShowTime };
