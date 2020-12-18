const initialState = {
  bookingInfo: null,
  listSeat: [],
  listSeatSelected: [],
  total: 0,
  activeNotification: 0,
  preActiveNotification: 0,
};

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_SUCCESS": {
      let newBookingInfo = { ...action.payload.thongTinPhim };
      let newListSeat = [...action.payload.danhSachGhe];
      return { ...state, bookingInfo: newBookingInfo, listSeat: newListSeat };
    }
    case "CHOOSE_SEAT": {
      function handleSeatMiddleSelected(listSeat, stt) {
        return listSeat.filter((item) => {
          return parseInt(item.stt) === stt;
        })[0].daDat;
      }
      let index = state.listSeatSelected.findIndex(
        (ghe) => ghe.maGhe === action.payload.maGhe
      );
      let newListSeatSelected = [];
      newListSeatSelected = [...state.listSeatSelected];
      let activateCurrent = 0;
      if (index === -1) {
        state.total += action.payload.giaVe;
        newListSeatSelected.push(action.payload);
        newListSeatSelected.sort(function (a, b) {
          return parseInt(a.stt) - parseInt(b.stt);
        });
        console.log(newListSeatSelected);
        for (let i = 0; i < newListSeatSelected.length - 1; i++) {
          if (
            newListSeatSelected[i].codeRow ===
            newListSeatSelected[i + 1].codeRow
          ) {
            if (
              parseInt(newListSeatSelected[i].stt) + 2 ===
              parseInt(newListSeatSelected[i + 1].stt)
            ) {
              if (
                !handleSeatMiddleSelected(
                  state.listSeat,
                  parseInt(newListSeatSelected[i].stt) + 1
                )
              ) {
                activateCurrent++;
              }
            }
          }
        }
        if (activateCurrent > state.preActiveNotification) {
          state.activeNotification += 1;
        }
      } else {
        state.total -= action.payload.giaVe;
        newListSeatSelected.splice(index, 1);
      }
      state.listSeatSelected = newListSeatSelected;
      return {
        ...state,
        total: state.total,
        activeNotification: state.activeNotification,
        preActiveNotification: activateCurrent,
      };
    }
    case "RESET_NOTIFY": {
      return { ...state, activeNotification: action.payload };
    }
    default:
      return { ...state };
  }
};
export default BookingReducer;
