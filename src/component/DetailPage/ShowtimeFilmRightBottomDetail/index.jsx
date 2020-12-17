import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowtimeFilmRightBottomDetailItem from "../ShowtimeFilmRightBottomDetailItem";
import "./ShowtimeFilmRightBottomDetail.scss";
import { showInfoFilmByDate } from "../../../redux/actions/Detail";
function ShowtimeFilmRightBottomDetail(props) {
  let dispatch = useDispatch();
  let date = useSelector((state) => {
    return state.DetailReducer.minDate;
  });
  let infoBottom = useSelector((state) => {
    return state.DetailReducer.ShowTimeBottom;
  });
  let cinemaSysSelected = useSelector((state) => {
    return state.DetailReducer.cinemaSysSelected;
  });
  console.log(infoBottom);
  // console.log(infoBottomDetail);
  useEffect(() => {
    dispatch(showInfoFilmByDate(date));
  }, [date]);
  useEffect(() => {
    dispatch(showInfoFilmByDate(date));
  }, [cinemaSysSelected]);
  const renderInfoBottom = () => {
    if (infoBottom.length > 0) {
      return infoBottom.map((item, index) => {
        return (
          <ShowtimeFilmRightBottomDetailItem
            item={item}
            key={index + "infoBottom"}
          />
        );
      });
    }
  };
  return (
    <div className="wp_tabDetailRightBottom">
      <div className="list_detailInfo">
        {/* end item 1 */}
        {renderInfoBottom()}
      </div>
    </div>
  );
}
export default ShowtimeFilmRightBottomDetail;
