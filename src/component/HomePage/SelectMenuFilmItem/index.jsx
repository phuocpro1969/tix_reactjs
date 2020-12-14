import React from "react";
import { useDispatch } from "react-redux";
import "./SelectMenuFilmItem.scss";
import { resetDateByListFilm } from "../../../redux/actions/getListFilmAction";
import { resetTimeByFilm } from "../../../redux/actions/getListFilmAction";
import { showNameFilmOnMenu } from "../../../redux/actions/getListFilmAction";
import { resetCinemaSystemByFilm } from "../../../redux/actions/getListFilmAction";
function SelectMenuFilmItem(props) {
  let { item, getIdFilm } = props;
  let dispatch = useDispatch();
  function handleShowFilmSelected() {
    getIdFilm(item.maPhim);
    dispatch(showNameFilmOnMenu(item.tenPhim));
    dispatch(resetCinemaSystemByFilm(-1));
    dispatch(resetDateByListFilm(-1));
    dispatch(resetTimeByFilm(-1));
  }
  return (
    <li
      className="dropdown-item dropdown-item--listFilm"
      onClick={handleShowFilmSelected}
    >
      {item.tenPhim}
    </li>
  );
}

export default SelectMenuFilmItem;
