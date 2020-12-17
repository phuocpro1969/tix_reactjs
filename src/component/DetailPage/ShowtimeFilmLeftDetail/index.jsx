import React from "react";
import { useSelector } from "react-redux";
import ShowtimeFilmLeftDetailItem from "../ShowtimeFilmLeftDetailItem";
import "./ShowtimeFilmLeftDetail.scss";
function ShowtimeFilmLeftDetail(props) {
  let listCinema = useSelector((state) => {
    return state.DetailReducer.listCinemaSys;
  });
  function renderListCinema() {
    return listCinema?.map((item, index) => {
      return <ShowtimeFilmLeftDetailItem key={index} item={item} />;
    });
  }
  return (
    <div className="wp__tabLeftDetailMovie">
      <ul className="tabLeftDetailMenu">{renderListCinema()}</ul>
    </div>
  );
}

export default ShowtimeFilmLeftDetail;
