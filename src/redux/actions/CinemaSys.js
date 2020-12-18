import axios from "axios";
function getListCinemaSysRequest() {
  return (dispatch) => {
    // dispatch(startLoadingSys());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      data: null,
    })
      .then(function (ress) {
        dispatch(getListCinemaSysSuccess(ress.data));
        // console.log(ress.data);
        dispatch(stopLoadingSys());
      })
      .catch(function (err) {
        dispatch(getListCinemaSysFailed(err));
        console.log(err);
        // dispatch(stopLoadingSys());
      });
  };
}
function getListCinemaSysSuccess(data) {
  return {
    type: "GET_CINEMASYS_SUCCESS",
    payload: data,
  };
}
function getListCinemaSysFailed(err) {
  return {
    type: "GET_CINEMASYS_FAILED",
    payload: err,
  };
}
export { getListCinemaSysRequest };
function GetInfoShowTimeOfEachSys(id) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP11`,
      data: null,
    })
      .then(function (ress) {
        // console.log(ress.data);
        dispatch(GetInfoShowTimeOfEachSysSuccess(ress.data));
      })
      .catch(function (err) {
        dispatch(GetInfoShowTimeOfEachSysFailed(err));
        console.log(err);
      });
  };
}
function GetInfoShowTimeOfEachSysSuccess(data) {
  return {
    type: "GET_INFO_SHOW_TIME_EACH_SYS_SUCCESS",
    payload: data,
  };
}
function GetInfoShowTimeOfEachSysFailed(err) {
  return {
    type: "GET_INFO_SHOW_TIME_EACH_SYS_FAILED",
    payload: err,
  };
}
export { GetInfoShowTimeOfEachSys };
export function startLoadingSys() {
  return {
    type: "START_LOADIND_SYS",
  };
}

export function stopLoadingSys() {
  return {
    type: "STOP_LOADIND_SYS",
  };
}
