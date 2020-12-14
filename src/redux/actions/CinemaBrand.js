import axios from "axios";
function GetListCinemaBrandRequest(id) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
      data: null,
    })
      .then(function (ress) {
        dispatch(GetListCinemaBrandSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(GetListCinemaBrandFailed(err));
        // console.log(err);
      });
  };
}
function GetListCinemaBrandSuccess(data) {
  return {
    type: "GET_LIST_CINEMA_BRAND_SUCCESS",
    payload: data,
  };
}
function GetListCinemaBrandFailed(err) {
  return {
    type: "GET_LIST_CINEMA_BRAND_FAILED",
    PAYLOAD: err,
  };
}
export { GetListCinemaBrandRequest };
function GetListFilmByCinemaBrandId(id) {
  return {
    type: "GET_LIST_FILM_CINEMA_BRAND_BY_ID",
    payload: id,
  };
}
export { GetListFilmByCinemaBrandId };
