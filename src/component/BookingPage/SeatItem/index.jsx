import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeSeat } from "../../../redux/actions/Booking";
function renderTypeSeat(daDat) {
  if (daDat) {
    return "seat__item__disable";
  } else {
    return "sp__seat__normal";
  }
}
function renderSeatVip(loaiGhe) {
  if (loaiGhe === "Vip") {
    return "seat__item__vip";
  }
}
function SeatItem(props) {
  let dispatch = useDispatch();
  let listSeatSelected = useSelector((state) => {
    return state.BookingReducer.listSeatSelected;
  });
  let { maGhe, tenGhe, loaiGhe, daDat } = props.seatItem;
  // console.log(props.seatItem);
  function activeSeatSelected() {
    const idxSeat = listSeatSelected.findIndex((ghe) => ghe.maGhe === maGhe);
    if (idxSeat !== -1) {
      return "sp__seat__selected";
    }
  }

  let codeRow = props.code;
  function HandleSeatSelected() {
    if (daDat === false) {
      let codeSeat = codeRow + tenGhe;
      let seatSelecting = {
        ...props.seatItem,
        codeRow,
        codeSeat,
      };
      // props.triggerAnima();
      dispatch(activeSeat(seatSelecting));
    }
  }
  return (
    <React.Fragment>
      <span className="seat__wrapper" onClick={HandleSeatSelected}>
        <span
          style={{ color: "white" }}
          className={`seat__item ${activeSeatSelected()} ${renderSeatVip(
            loaiGhe
          )} ${renderTypeSeat(daDat)}`}
        >
          {tenGhe}
        </span>
      </span>
    </React.Fragment>
  );
}

export default React.memo(SeatItem);
