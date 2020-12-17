import axios from "axios";
function getInfoDetailFilmRequest(codeFilm) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${codeFilm}`,
      data: null,
    })
      .then(function (ress) {
        dispatch(getInfoDetailFilmSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(getInfoDetailFilmFailed(err));
        // console.log(err);
      });
  };
}
function getInfoDetailFilmSuccess(data) {
  return {
    type: "GET_INFO_DETAIL_SUCCESS",
    payload: data,
  };
}
function getInfoDetailFilmFailed(err) {
  return {
    type: "GET_INFO_DETAIL_FAILED",
    payload: err,
  };
}
export { getInfoDetailFilmRequest };

function getCinemaSysRequest() {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      data: null,
    })
      .then(function (ress) {
        dispatch(getCinemaSysDetailSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(getCinemaSysDetailFailed(err));
        // console.log(err);
      });
  };
}
function getCinemaSysDetailSuccess(data) {
  return {
    type: "GET_CINEMA_DETAIL_SUCCESS",
    payload: data,
  };
}
function getCinemaSysDetailFailed(err) {
  return {
    type: "GET_CINEMA_DETAIL_FAILED",
    payload: err,
  };
}
export { getCinemaSysRequest };
function getInfoShowTimeByIdDetail(id) {
  return {
    type: "GET_INFO_SHOW_TIME_BY_ID_LOGO",
    payload: id,
  };
}
export { getInfoShowTimeByIdDetail };
function showInfoFilmByDate(data) {
  return {
    type: "GET_INFO_FILM_BY_DATE",
    payload: data,
  };
}
export { showInfoFilmByDate };
function getFirstInfoShowTime(data1, data2) {
  return {
    type: "GET_FIRST_INFO",
    payload1: data1,
    payload2: data2,
  };
}
export { getFirstInfoShowTime };
