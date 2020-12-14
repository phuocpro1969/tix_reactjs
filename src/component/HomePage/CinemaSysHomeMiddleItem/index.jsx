import React from "react";
import { useDispatch } from "react-redux";
import "./CinemaSysHomeMiddleItem.scss";
import { GetListFilmByCinemaBrandId } from "../../../redux/actions/CinemaBrand";
function changeColorTex(logo) {
  if (logo === "BHD Star Cineplex ") {
    return "greenColorTextBrand";
  } else if (logo === "CGV ") {
    return "purpleColorTextBrand";
  } else if (logo === "CNS ") {
    return "pinkColorTextBrand";
  } else if (logo === "GLX ") {
    return "grayColorTextBrand";
  } else if (logo === "Lotte ") {
    return "redColorTextBrand";
  } else {
    return "orangeColorTextBrand";
  }
}
function CinemaSysHomeMiddleItem(props) {
  let dispatch = useDispatch();
  let { item, active, setActiveBrand, idx, setTrangThai } = props;
  let arrItem = item.tenCumRap.split("-");
  function handleClickBrand() {
    setTrangThai(false);
    setActiveBrand(idx);
    dispatch(GetListFilmByCinemaBrandId(item.maCumRap));
  }
  return (
    <div
      className={
        active ? "tab__content__item active__opacity" : "tab__content__item"
      }
      onClick={handleClickBrand}
    >
      <div className="wp__info__tab__content clearfix">
        <a className="tab__content__item__link">
          <img src="./images/bhd_thumb.jpg" className="img-fluid" alt="anh" />
        </a>
        <div className="wp__info__tab__cinema">
          <h4 className="tab__h4__title">
            <span className={changeColorTex(arrItem[0])}>{arrItem[0]}</span> -
            <span className="tab__h4__title__nameCinema">{arrItem[1]}</span>
          </h4>
          <span className="tab__cinema__detail">{item.diaChi}</span>
          <a className="tab__link__detail">[chi tiết]</a>
        </div>
      </div>
    </div>
  );
}

export default CinemaSysHomeMiddleItem;
