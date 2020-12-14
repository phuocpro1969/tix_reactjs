import React, { useEffect, useState } from "react";
import SelectMenuFilm from "../SelectMenuFilm";
import { GetListMovieTheaterByIdRequest } from "../../../redux/actions/getListMovieTheatersById";
import "./selectMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import SelectMenuMovieTheater from "../SelectMenuMovieTheater";
import SelectMenuDate from "../SelectMenuDate";
import SelectMenuTime from "../SelectMenuTime";
import { NavLink } from "react-router-dom";
function SelectMenu(props) {
  let nameFilm = useSelector((state) => {
    return state.SelectMenuReducer.statusFilm;
  });
  let nameCinema = useSelector((state) => {
    return state.SelectMenuReducer.statusCinemaSystem;
  });
  let date = useSelector((state) => {
    return state.SelectMenuReducer.statusDate;
  });
  let time = useSelector((state) => {
    return state.SelectMenuReducer.statusLichChieu;
  });
  let codeShowTime = useSelector((state) => {
    return state.SelectMenuReducer.codeShowTime;
  });
  let dispatch = useDispatch();
  let [idFilm, setIdFilm] = useState(-1);
  function getIdFilm(id) {
    setIdFilm(id);
  }
  useEffect(() => {
    dispatch(GetListMovieTheaterByIdRequest(idFilm));
  }, [idFilm]);
  function renderBtnBookingTicket() {
    if (
      nameFilm !== -1 &&
      nameFilm !== null &&
      nameCinema !== -1 &&
      nameCinema !== null &&
      date !== -1 &&
      date !== null &&
      time !== -1 &&
      time !== null
    ) {
      return (
        <NavLink
          to={`/Booking/${codeShowTime}`}
          target="_blank"
          className="btn_bookingTicketNow btnBookingActive"
        >
          <span className="activeTextBookingNow"> Mua vé ngay</span>
        </NavLink>
      );
    }
    return (
      <button className="btn_bookingTicketNow" disabled>
        Mua vé ngay
      </button>
    );
  }
  return (
    <section className="selectMenu">
      <SelectMenuFilm getIdFilm={getIdFilm} />
      <SelectMenuMovieTheater />

      <SelectMenuDate />
      <SelectMenuTime />
      {renderBtnBookingTicket()}
    </section>
  );
}

export default SelectMenu;
