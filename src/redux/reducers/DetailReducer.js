import format from "date-format";
const initialState = {
  infoFilm: null,
  listCinemaSys: [],
  cinemaSysSelected: null,
  showTimeSelected: [],
  listDate: [],
  minDate: null,
  ShowTimeBottom: [],
  firstIdRap: null,
};
const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO_DETAIL_SUCCESS": {
      let newInfo = { ...action.payload };
      return { ...state, infoFilm: newInfo };
    }
    case "GET_CINEMA_DETAIL_SUCCESS": {
      let listCinema = [...action.payload];
      let cinemaSysSelected = { ...action.payload[0] };
      return { ...state, listCinemaSys: listCinema, cinemaSysSelected };
    }
    case "GET_INFO_SHOW_TIME_BY_ID_LOGO": {
      // console.log(action.payload.maHeThongRap);
      if (state.infoFilm) {
        // console.log(state.infoFilm);
        let newInfoFilm = { ...state.infoFilm };

        let arrlichChieu = newInfoFilm?.lichChieu?.map((item, index) => ({
          maLichChieu: item.maLichChieu,
          ngayChieuGioChieu: item.ngayChieuGioChieu,
          thongTinRap: item.thongTinRap,
        }));
        // console.log(arrlichChieu);
        let arrlichChieuTheoHeThong = arrlichChieu.filter((item) => {
          return item.thongTinRap.maHeThongRap === action.payload.maHeThongRap;
        });
        // console.log(arrlichChieuTheoHeThong);
        state.showTimeSelected = arrlichChieuTheoHeThong;
        let arrDate = arrlichChieuTheoHeThong.map((item, index) => {
          return format("yyyy/MM/dd", new Date(item.ngayChieuGioChieu));
        });
        let filterArrDate = [...arrDate];
        filterArrDate = filterArrDate.filter((item, index) => {
          return filterArrDate.indexOf(item) === index;
        });
        // console.log(filterArrDate);
        filterArrDate.sort((a, b) => {
          if (a < b) return -1;
          return 1;
        });
        let minDate = filterArrDate[0];
        // console.log(minDate);
        state.minDate = minDate;
        let arrSortDate = [...filterArrDate];
        // console.log(arrSortDate);
        state.listDate = arrSortDate;
      }
      return { ...state, cinemaSysSelected: action.payload };
    }
    case "GET_INFO_FILM_BY_DATE": {
      // console.log(action.payload);
      // console.log(state.showTimeSelected);
      let filterShowTime = state.showTimeSelected?.filter((item) => {
        return (
          format("yyyy/MM/dd", new Date(item.ngayChieuGioChieu)) ===
          action.payload
        );
      });
      //show time nay co the chua tu 2 rap tro len trong cung he thong vs cung 1 gio chieu

      //lay danh sach cac rap hien chieu o he thong rap nay tai cung thoi gian.
      let listCumRap = filterShowTime?.map((item, index) => {
        return item.thongTinRap.maCumRap;
      });
      listCumRap = listCumRap?.filter((item, index) => {
        return listCumRap.indexOf(item) === index;
      });
      // console.log(listCumRap);
      // console.log(filterShowTime);
      let arrParent = [];
      for (let i = 0; i < listCumRap?.length; i++) {
        let arrChild = [];
        for (let j = 0; j < filterShowTime.length; j++) {
          if (listCumRap[i] === filterShowTime[j].thongTinRap.maCumRap) {
            arrChild.push(filterShowTime[j]);
          }
        }
        arrParent.push(arrChild);
      }
      let infoBottom = [...arrParent];
      // console.log(arrParent);
      return { ...state, ShowTimeBottom: infoBottom };
    }
    case "GET_FIRST_INFO": {
      console.log("1", action.payload1);
      console.log("2", action.payload2);
      let arrLichChieuTheoRap = action.payload2?.filter((item) => {
        return item.thongTinRap.maHeThongRap === action.payload1;
      });
      console.log(arrLichChieuTheoRap);
      state.showTimeSelected = arrLichChieuTheoRap;
      arrLichChieuTheoRap = arrLichChieuTheoRap?.map((item, index) => {
        return format("yyyy/MM/dd", new Date(item.ngayChieuGioChieu));
      });
      console.log(arrLichChieuTheoRap);
      if (arrLichChieuTheoRap) {
        let filterArrDate = [...arrLichChieuTheoRap];
        filterArrDate = filterArrDate?.filter((item, index) => {
          return filterArrDate.indexOf(item) === index;
        });
        console.log(filterArrDate);
        filterArrDate = filterArrDate.sort((a, b) => {
          if (a < b) return -1;
          return 1;
        });
        let minDate = filterArrDate[0];
        state.minDate = minDate;
        state.listDate = [...filterArrDate];
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default DetailReducer;
