import React from "react";
import ShowtimeFilmRightBottomDetail from "../ShowtimeFilmRightBottomDetail";
import ShowtimeFilmRightTopDetail from "../ShowtimeFilmRightTopDetail";
import "./ShowtimeFilmRightDetail.scss";
function ShowtimeFilmRightDetail(props) {
  return (
    <div className="wp__tabRightDetailMovie">
      <ShowtimeFilmRightTopDetail />
      <ShowtimeFilmRightBottomDetail />
    </div>
  );
}

export default ShowtimeFilmRightDetail;
