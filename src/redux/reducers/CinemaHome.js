const initialState = {
  CinemaSys: [],
  InfoShowTimeEachSys: [],
  CinemaSysSelected: null,
  ListCinemaBrands: [],
  CinemaBrandSelected: null,
  ListFilm: [],
  isLoadingSys: false,
};
const CinemaHome = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CINEMASYS_SUCCESS": {
      let newCinemaSys = [...action.payload];
      return { ...state, CinemaSys: newCinemaSys };
    }
    case "GET_LIST_CINEMA_BRAND_SUCCESS": {
      let newListCinemaBrands = [...action.payload];
      let maCumRap = newListCinemaBrands[0].maCumRap;
      return {
        ...state,
        ListCinemaBrands: newListCinemaBrands,
        CinemaBrandSelected: maCumRap,
      };
    }
    case "GET_INFO_SHOW_TIME_EACH_SYS_SUCCESS": {
      // console.log(action.payload);
      // console.log(state.CinemaBrandSelected);
      // console.log(state.ListCinemaBrands[0]);
      let film = [];
      if (action.payload.length > 0) {
        let dsCumRap = action.payload[0]?.lstCumRap;
        // console.log(dsCumRap);
        // console.log(dsCumRap[0].danhSachPhim);
        film = [...dsCumRap[0].danhSachPhim];
      }
      return {
        ...state,
        InfoShowTimeEachSys: action.payload,
        ListFilm: film,
      };
    }
    case "GET_INFO_SHOW_TIME_EACH_SYS_FAILED": {
      // console.log(action.payload);
      let emptyArrListFilm = [];
      let emptyArrInfoShowTimeEachSys = [];
      return {
        ...state,
        ListFilm: emptyArrListFilm,
        InfoShowTimeEachSys: emptyArrInfoShowTimeEachSys,
      };
    }
    case "GET_LIST_FILM_CINEMA_BRAND_BY_ID": {
      // console.log(action.payload);
      // console.log(state.InfoShowTimeEachSys);
      if (state.InfoShowTimeEachSys.length > 0) {
        console.log("ok");
        let ListnewCumRap = [...state.InfoShowTimeEachSys];
        // console.log(ListnewCumRap);
        // console.log(ListnewCumRap[0].lstCumRap);
        let newCumRap = ListnewCumRap[0].lstCumRap?.filter((item, index) => {
          return action.payload === item.maCumRap;
        });
        // console.log(newCumRap[0]);
        // if(newCumRap)
        let film = [];
        let maCumRap = action.payload;
        if (newCumRap.length > 0) {
          film = [...newCumRap[0].danhSachPhim];
          maCumRap = newCumRap[0].maCumRap;
        }
        return { ...state, ListFilm: film, CinemaBrandSelected: maCumRap };
      }
    }
    default:
      return { ...state };
  }
};
export default CinemaHome;
