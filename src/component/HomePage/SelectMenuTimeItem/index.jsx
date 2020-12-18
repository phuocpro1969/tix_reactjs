import React from "react";
import format from "date-format";
import { useDispatch } from "react-redux";
import { showTimeOnMenu } from "../../../redux/actions/getTimeShowTime";
import { getCodeShowTime } from "../../../redux/actions/getTimeShowTime";
function SelectMenuTimeItem(props) {
  let dispatch = useDispatch();
  let { codeShowTime, date } = props.item;
  function handleShowTime() {
    dispatch(getCodeShowTime(codeShowTime));
    dispatch(showTimeOnMenu(format("hh:mm", new Date(date))));
  }
  return (
    <li
      className="dropdown-item dropdown-item--listTheater"
      onClick={handleShowTime}
    >
      {format("hh:mm", new Date(date))}
    </li>
  );
}

export default SelectMenuTimeItem;
