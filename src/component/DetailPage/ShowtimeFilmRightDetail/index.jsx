import React from "react";
import { useSelector } from "react-redux";
import ShowtimeFilmRightBottomDetail from "../ShowtimeFilmRightBottomDetail";
import ShowtimeFilmRightTopDetail from "../ShowtimeFilmRightTopDetail";
import "./ShowtimeFilmRightDetail.scss";

function ShowtimeFilmRightDetail(props) {
  
  let listShow = useSelector((state) => {
    return state.DetailReducer.showTimeSelected;
  });


  function render() {
    if (listShow?.length !== 0) {
      return (
        <div className="wp__tabRightDetailMovie">
          <ShowtimeFilmRightTopDetail />
          <ShowtimeFilmRightBottomDetail />
        </div>
      );
    }
    else {
      return (
        <div className="wp__tabRightDetailMovie">
          <p className="text-center pcolor">Hiện tại rạp chưa có lịch chiếu!</p>
        </div>
      );
    }
  }
  return (
    <React.Fragment> {render()} </React.Fragment>
  );
}

export default ShowtimeFilmRightDetail;
