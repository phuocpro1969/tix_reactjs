import axios from "axios";
import { startLoading, stopLoading } from "./Common";
function getListFilmRequest() {
  return (dispatch) => {
    // dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      data: null,
    })
      .then(function (ress) {
        dispatch(getListFilmSuccess(ress.data));
        console.log(ress.data);
        // dispatch(stopLoading());
      })
      .catch(function (err) {
        dispatch(getListFilmFailed(err));
        // console.log(err);
        // dispatch(stopLoading());
      });
  };
}
export { getListFilmRequest };
function getListFilmSuccess(data) {
  return {
    type: "GET_LIST_FILM_SUCCESS",
    payload: data,
  };
}
function getListFilmFailed(err) {
  return {
    type: "GET_LIST_FILM_FAILED",
    payload: err,
  };
}
function resetDateByListFilm(status) {
  return {
    type: "RESET_DATE_BY_LIST_FILM",
    status: status,
  };
}
export { resetDateByListFilm };
function resetTimeByFilm(status) {
  return {
    type: "RESET_TIME_BY_FILM",
    status: status,
  };
}
export { resetTimeByFilm };
function showNameFilmOnMenu(data) {
  return {
    type: "SHOW_NAME_FILM_ON_MENU",
    payload: data,
  };
}
export { showNameFilmOnMenu };
function resetCinemaSystemByFilm(status) {
  return {
    type: "RESET_THEATER_BY_FILM",
    status: status,
  };
}
export { resetCinemaSystemByFilm };
