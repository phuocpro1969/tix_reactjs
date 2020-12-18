const initialState = {
  listFilm: [],
  statusFilm: null,
  CinemaSystem: [],
  statusCinemaSystem: null,
  Onerap: null,
  statusDate: null,
  arrLichChieu: [],
  statusLichChieu: null,
  codeShowTime: null,
};
const SelectMenuReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "GET_LIST_FILM_SUCCESS": {
      let newListFilm = [...action.payload];
      return { ...state, listFilm: newListFilm };
    }
    case "SHOW_NAME_FILM_ON_MENU": {
      return { ...state, statusFilm: action.payload };
    }
    case "GET_MOVIETHEATER_SUCCESS": {
      return { ...state, CinemaSystem: { ...action.payload } };
    }
    case "SHOW_NAME_THEATER_ON_MENU": {
      return { ...state, statusCinemaSystem: action.payload };
    }
    case "RESET_THEATER_BY_FILM": {
      return { ...state, statusCinemaSystem: action.status };
    }
    case "GET_DATE_SHOWTIME": {
      let htRap = state.CinemaSystem.heThongRapChieu?.map((item, index) => {
        return item;
      });
      let cumRap = htRap.map((item, index) => {
        return item.cumRapChieu;
      });
      let newRap = cumRap.map((item, index) => {
        return item.filter((item1) => {
          return item1.tenCumRap === action.payload;
        });
      });
      let newRapItem = newRap.filter((item) => {
        return item.length > 0;
      });
      let infoNewRap = { ...newRapItem[0][0] };
      return { ...state, Onerap: infoNewRap };
    }
    case "SHOW_DATE_ON_MENU": {
      return { ...state, statusDate: action.payload };
    }
    case "RESET_DATE_BY_THEATER": {
      return { ...state, statusDate: action.status };
    }
    case "RESET_DATE_BY_LIST_FILM": {
      return { ...state, statusDate: action.status };
    }
    case "GET_TIME_SHOW_TIME": {
      let newArrLichChieuPhim = [];
      state.arrLichChieu = [];
      newArrLichChieuPhim = [...state.arrLichChieu];
      state.Onerap.lichChieuPhim.map((item, index) => {
        if (item.ngayChieuGioChieu.indexOf(action.payload) === 0) {
          let objLichChieu = {
            codeShowTime: item.maLichChieu,
            date: item.ngayChieuGioChieu,
          };
          newArrLichChieuPhim.push(objLichChieu);
        }
        return item;
      });
      state.arrLichChieu = [...newArrLichChieuPhim];
      return { ...state };
    }
    case "SHOW_TIME_ON_MENU": {
      return { ...state, statusLichChieu: action.payload };
    }
    case "RESET_TIME_BY_DATE": {
      return { ...state, statusLichChieu: action.status };
    }
    case "RESET_TIME_BY_THEATER": {
      return { ...state, statusLichChieu: action.status };
    }
    case "RESET_TIME_BY_FILM": {
      return { ...state, statusLichChieu: action.status };
    }
    case "GET_CODE_SHOW_TIME": {
      return { ...state, codeShowTime: action.payload };
    }
    default:
      return { ...state };
  }
};
export default SelectMenuReducer;
