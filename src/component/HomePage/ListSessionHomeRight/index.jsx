import React from "react";
import ListSessionHomeRightItem from "../ListSessionHomeRightItem";

function ListSessionHomeRight(props) {
  let { lstLichChieu } = props;
  // console.log(lstLichChieu);
  function showLichChieuFilm() {
    return lstLichChieu?.map((item, index) => {
      return <ListSessionHomeRightItem item={item} key={index} />;
    });
  }
  return <div className="list__session__filmShow">{showLichChieuFilm()}</div>;
}

export default ListSessionHomeRight;
