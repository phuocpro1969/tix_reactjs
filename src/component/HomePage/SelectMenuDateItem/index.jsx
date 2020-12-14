import React from "react";
import format from "date-format";
import { useDispatch } from "react-redux";
import { showDateOnMenu } from "../../../redux/actions/getDateShowTime";
import { getTimeShowTime } from "../../../redux/actions/getTimeShowTime";
import { resetTimeByDate } from "../../../redux/actions/getDateShowTime";
function SelectMenuDateItem(props) {
  let dispatch = useDispatch();
  // console.log(props.item);
  let { item } = props;
  function handleClick() {
    dispatch(showDateOnMenu(item));
    dispatch(getTimeShowTime(item));
    dispatch(resetTimeByDate(-1));
  }
  return (
    <li
      className="dropdown-item dropdown-item--listTheater"
      onClick={handleClick}
    >
      {item}
    </li>
  );
}

export default SelectMenuDateItem;
