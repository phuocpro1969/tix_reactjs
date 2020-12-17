import React from "react";
import "./ShowtimeFilmRightTopDetailItem.scss";
import { useDispatch } from "react-redux";
import { showInfoFilmByDate } from "../../../redux/actions/Detail";
function renderDateInWeek(data) {
  switch (data) {
    case 0:
      return "THỨ HAI";
    case 1:
      return "THỨ BA";
    case 2:
      return "THỨ TƯ";
    case 3:
      return "THỨ NĂM";
    case 4:
      return "THỨ SÁU";
    case 5:
      return "THỨ BẢY";
    case 6:
      return "CN";
    default:
      return "không hợp lệ";
  }
}
function ShowtimeFilmRightTopDetailItem(props) {
  let { item } = props;
  // console.log(item);
  let dispatch = useDispatch();
  let date = new Date(item);
  // console.log(date.getDay());
  const handleChangeInfoShowTime = () => {
    // console.log(item);
    dispatch(showInfoFilmByDate(item));
  };
  return (
    <li className="top__detail__item" onClick={handleChangeInfoShowTime}>
      {renderDateInWeek(date.getDay())}
      <p>{item}</p>
    </li>
  );
}

export default ShowtimeFilmRightTopDetailItem;
