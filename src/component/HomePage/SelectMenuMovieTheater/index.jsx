import React from "react";
import { useSelector } from "react-redux";
import SelectMenuMovieTheaterItem from "../SelectMenuMovieTheaterItem";
import "./SelectMenuMovieTheater.scss";
function SelectMenuMovieTheater(props) {
  let listCinemaTheater = useSelector((state) => {
    return state.SelectMenuReducer.CinemaSystem;
  });
  let statusCinemaTheater = useSelector((state) => {
    return state.SelectMenuReducer.statusCinemaSystem;
  });
  let statusFilm = useSelector((state) => {
    return state.SelectMenuReducer.statusFilm;
  });
  // console.log(listCinemaTheater);
  let CumRapArr = [];
  if (listCinemaTheater.heThongRapChieu !== undefined) {
    let CumRapChieu = listCinemaTheater.heThongRapChieu.map((item, index) => {
      return item.cumRapChieu;
    });
    for (let i = 0; i < CumRapChieu.length; i++) {
      CumRapChieu[i].map((item, index) => {
        // console.log(item);
        CumRapArr.push(item.tenCumRap);
      });
    }
  }
  // console.log(CumRapArr);
  function ShowListCumRapChieu() {
    if (CumRapArr !== undefined && CumRapArr.length > 0) {
      //   console.log(CumRapArr);
      return CumRapArr.map((item, index) => {
        return <SelectMenuMovieTheaterItem item={item} key={index} />;
      });
    }
  }

  return (
    <div className="dropdown dropdown--fixed wp__movieTheaterDropdown">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="theater__movieDropdown">
          {statusCinemaTheater === null || statusCinemaTheater === -1
            ? "Rạp"
            : statusCinemaTheater}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listTheater shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {statusFilm !== null && statusFilm !== -1 ? (
          ShowListCumRapChieu()
        ) : (
          <li className="dropdown-item text-center text-danger text__err">
            vui lòng chọn phim
          </li>
        )}
      </ul>
    </div>
  );
}

export default SelectMenuMovieTheater;
