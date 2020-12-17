import React from "react";
import ListSessionRightBottomDetail from "../ListSessionRightBottomDetail";
import "./ShowtimeFilmRightBottomDetailItem.scss";

function ShowtimeFilmRightBottomDetailItem(props) {
  let { item } = props;
  // if (item.length > 0) {
  //   console.log(item);
  // }
  // let arrName = item?.thongTinRap.split("-");
  function renderName() {
    if (item.length > 0) {
      let arrName;
      console.log(item[0].thongTinRap);
      arrName = item[0]?.thongTinRap.tenCumRap.split("-");
      return arrName;
    }
  }
  return (
    <div className="detailItemMovie">
      <div
        className="top_detailInfoItemMovie clearfix"
        data-toggle="collapse"
        data-target="#collapseOne"
      >
        <div className="thumb_detailInfoCinema">
          <img
            src="../../../../images/bhd_thumb.jpg"
            className="img-fluid"
            alt="anh"
          />
        </div>
        <div className="wp_detailInfoRight">
          {console.log(renderName())}
          <p className="title_detailInfo">
            <span>{item.length > 0 ? renderName()[0] : ""}</span> -{" "}
            {item.length > 0 ? renderName()[1] : ""}
          </p>
          <p className="address_detailInfo">
            L5-Vincom 3/2, 3C Đường 3/2, Q.10 <a href="#">[Bản đồ]</a>
          </p>
        </div>
      </div>
      <div
        id="collapseOne"
        className="bottom_detailInfoItemMovie collapse show"
      >
        <h3>2D Digital</h3>
        <ListSessionRightBottomDetail listSession={item} />
      </div>
    </div>
  );
}

export default ShowtimeFilmRightBottomDetailItem;
