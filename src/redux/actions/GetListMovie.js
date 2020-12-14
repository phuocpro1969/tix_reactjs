import axios from "axios";
function GetListMovieRequest() {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      data: null,
    })
      .then(function (ress) {
        dispatch(GetListMovieSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(GetListMovieFailed(err));
        console.log(err);
      });
  };
}
function GetListMovieSuccess(data) {
  return {
    type: "GET_LIST_MOVIE_SUCCESS",
    payload: data,
  };
}
function GetListMovieFailed(err) {
  return {
    type: "GET_LIST_MOVIE_FAILED",
    payload: err,
  };
}
export { GetListMovieRequest };
