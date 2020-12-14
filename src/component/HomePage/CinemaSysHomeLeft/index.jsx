import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CinemaSysHomeLeftItem from "../CinemaSysHomeLeftItem";
import "./CinemaSysHomeLeft.scss";
import { getListCinemaSysRequest } from "../../../redux/actions/CinemaSys";
function CinemaSysHomeLeft(props) {
  let [activeIdx, setActiveIdx] = useState(0);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCinemaSysRequest());
  }, []);
  let listCinemaSys = useSelector((state) => {
    return state.CinemaHome.CinemaSys;
  });
  function handleItemClick(index) {
    setActiveIdx(index);
  }
  // console.log(listCinemaSys);
  function ShowListCinemaSys() {
    return listCinemaSys.map((item, index) => {
      return (
        <CinemaSysHomeLeftItem
          setTrangThai={props.setTrangThai}
          setIdLogo={props.setIdLogo}
          item={item}
          key={index}
          idx={index}
          handleItemClick={handleItemClick}
          active={activeIdx === index}
        />
      );
    });
  }
  return <ul className="tab__menu">{ShowListCinemaSys()}</ul>;
}

export default CinemaSysHomeLeft;
