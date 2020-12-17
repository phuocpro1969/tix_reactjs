import React from "react";
import { useDispatch } from "react-redux";
import "./ShowtimeFilmLeftDetailItem.scss";
import { getInfoShowTimeByIdDetail } from "../../../redux/actions/Detail";
function ShowtimeFilmLeftDetailItem(props) {
  let { item } = props;
  let dispatch = useDispatch();
  const handleChangeInfoByIdLogo = () => {
    dispatch(getInfoShowTimeByIdDetail(item));
  };
  return (
    <li className="wp__logoDetail" onClick={handleChangeInfoByIdLogo}>
      <div className="wpThumb__detailMovie">
        <img src={item.logo} className="img-fluid" alt="anh" />
      </div>
      <p className="title__detailMovie">{item.tenHeThongRap}</p>
    </li>
  );
}

export default ShowtimeFilmLeftDetailItem;
