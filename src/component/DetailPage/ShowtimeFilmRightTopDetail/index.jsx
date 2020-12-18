import React from "react";
import { useSelector } from "react-redux";
import ShowtimeFilmRightTopDetailItem from "../ShowtimeFilmRightTopDetailItem";
import "./ShowtimeFilmRightTopDetail.scss";
function ShowtimeFilmRightTopDetail(props) {
  let listDate = useSelector((state) => {
    return state.DetailReducer.listDate;
  });
  function renderListDate() {
    if (listDate) {
      return listDate.map((item, index) => {
        return (
          <ShowtimeFilmRightTopDetailItem item={item} key={index + "date"} />
        );
      });
    }
  }
  return (
    <div className="wp_tabDetailRightTop">
      <ul className="list-unstyled listDate clearfix">{renderListDate()}</ul>
    </div>
  );
}

export default ShowtimeFilmRightTopDetail;
