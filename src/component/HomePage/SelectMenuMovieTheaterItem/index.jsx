import React from "react";
import { useDispatch } from "react-redux";
import "./SelectMenuMovieTheaterItem.scss";
import { getDateShowTime } from "../../../redux/actions/getListMovieTheatersById";
import { resetTimeByTheater } from "../../../redux/actions/getListMovieTheatersById";
import { showNameTheaterOnMenu } from "../../../redux/actions/getListMovieTheatersById";
import { resetDateByTheater } from "../../../redux/actions/getListMovieTheatersById";
function SelectMenuMovieTheaterItem(props) {
  let { item } = props;
  // console.log(item);
  let dispatch = useDispatch();
  function handleRap() {
    dispatch(showNameTheaterOnMenu(item));
    dispatch(getDateShowTime(item));

    dispatch(resetTimeByTheater(-1));
    dispatch(resetDateByTheater(-1));
  }
  return (
    <li
      className="dropdown-item dropdown-item--listTheater"
      onClick={handleRap}
    >
      {item}
    </li>
  );
}

export default SelectMenuMovieTheaterItem;
