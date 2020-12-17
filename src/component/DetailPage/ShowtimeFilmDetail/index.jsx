import React, { useEffect } from "react";
import "./ShowtimeFilmDetail.scss";
import ShowtimeFilmLeftDetail from "../ShowtimeFilmLeftDetail";
import ShowtimeFilmRightDetail from "../ShowtimeFilmRightDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaSysRequest } from "../../../redux/actions/Detail";
import { getFirstInfoShowTime } from "../../../redux/actions/Detail";
function ShowtimeFilmDetail(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaSysRequest());
  }, []);
  let idRap = useSelector((state) => {
    return state.DetailReducer.cinemaSysSelected?.maHeThong;
  });
  useEffect(() => {
    dispatch(getFirstInfoShowTime(idRap));
  }, [idRap]);
  return (
    <div
      className="tab-pane fade show active container-fluid tab_wp_Showtimes"
      id="nav-showTimeDetail"
      role="tabpanel"
    >
      <div className="wp__tabDetailMovie">
        <ShowtimeFilmLeftDetail />
        <ShowtimeFilmRightDetail />
      </div>
    </div>
  );
}

export default ShowtimeFilmDetail;
