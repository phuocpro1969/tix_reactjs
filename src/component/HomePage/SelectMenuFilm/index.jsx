import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SelectMenuFilm.scss";
import { getListFilmRequest } from "../../../redux/actions/getListFilmAction";
import SelectMenuFilmItem from "../SelectMenuFilmItem";
function SelectMenuFilm(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFilmRequest());
  }, []);
  let statusFilm = useSelector((state) => {
    return state.SelectMenuReducer.statusFilm;
  });
  const listMovie = useSelector((state) => {
    return state.SelectMenuReducer.listFilm;
  });
  function showListMenuFilm() {
    if (listMovie.length > 0) {
      return listMovie.map((item, index) => {
        return (
          <SelectMenuFilmItem
            item={item}
            key={index}
            getIdFilm={props.getIdFilm}
          />
        );
      });
    }
  }
  return (
    <div className="dropdown dropdown--fixed wp__titleFilmDropdown">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="title__movieDropdown">
          {statusFilm === null ? "Phim" : statusFilm}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listfilm shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {showListMenuFilm()}
      </ul>
    </div>
  );
}

export default SelectMenuFilm;
