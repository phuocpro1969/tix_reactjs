import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "../SeatItem";
import "./ListSeat.scss";
function ListSeat(props) {
  // console.log(props.listSeat);
  let listSeat = useSelector((state) => {
    return state.BookingReducer.listSeat;
  });
  console.log("ok");
  // console.log(listSeat);
  let row = listSeat.length / 16;
  function getListSeat() {
    let arrWItem = [];
    for (let i = 1; i <= row; i++) {
      let arrItem = [];
      arrItem.push(
        <span className="seat__wrapper" key={i + "space-1"}>
          <span className="seat__item" key={i + "space0"}>
            {String.fromCharCode(64 + i)}
          </span>
        </span>
      );
      for (let j = (i - 1) * 16; j < i * 16; j++) {
        arrItem.push(
          <SeatItem
            // triggerAnima={props.triggerAnima}
            seatItem={listSeat[j]}
            key={j + "keysd"}
            code={String.fromCharCode(64 + i)}
          />
        );
        if (j % 8 === 7 && j % 16 !== 15) {
          arrItem.push(
            <span className="seat__wrapper" key={j + "space"}></span>
          );
        }
        if (j % 8 === 1 && j % 16 !== 9) {
          arrItem.push(
            <span className="seat__wrapper" key={j + "space1"}></span>
          );
        }
        if (j % 16 === 13) {
          arrItem.push(
            <span className="seat__wrapper" key={j + "space2"}></span>
          );
        }
      }
      arrWItem.push(
        <React.Fragment key={i + "space3"}>
          <div className="rowSeat">{arrItem}</div>
        </React.Fragment>
      );
    }
    return arrWItem;
  }
  return (
    <div className="listSeat">
      <div className="autoCenter">
        <div>{getListSeat()}</div>
      </div>
    </div>
  );
}

export default React.memo(ListSeat);
