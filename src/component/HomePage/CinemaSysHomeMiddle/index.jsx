import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CinemaSysHomeMiddleItem from "../CinemaSysHomeMiddleItem";
import "./CinemaSysHomeMiddle.scss";
function CinemaSysHomeMiddle(props) {
  // console.log(activeCumRap1);
  let [activeIdxBrand, setActiveIdxBrand] = useState(0);
  // console.log(activeIdxBrand);
  let listCinemaBrands = useSelector((state) => {
    return state.CinemaHome.ListCinemaBrands;
  });
  function setActiveBrand(idx) {
    setActiveIdxBrand(idx);
  }
  // console.log(props.activeRap1);
  useEffect(() => {
    if (props.activeRap1 === true) {
      setActiveBrand(0);
    }
  });
  function ShowListCinemaSysBrand() {
    if (listCinemaBrands.length > 0) {
      return listCinemaBrands?.map((item, index) => {
        return (
          <CinemaSysHomeMiddleItem
            idx={index}
            item={item}
            key={index}
            active={activeIdxBrand === index}
            setActiveBrand={setActiveBrand}
            setTrangThai={props.setTrangThai}
          />
        );
      });
    }
  }
  return <div className="tab__content__middle">{ShowListCinemaSysBrand()}</div>;
}

export default CinemaSysHomeMiddle;
