import React from "react";
import { useSelector } from "react-redux";
import "./InfoFilmDetail.scss";
import format from "date-format";
function InfoFilmDetail(props) {
  let infoFilm = useSelector((state) => {
    return state.DetailReducer.infoFilm;
  });
  return (
    <div
      className="tab-pane fade container-fluid tab_wp_info"
      id="nav-info"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-md-6 info_nav_left">
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Ngày công chiếu</p>
            <p className="contentInfo_nav ng-binding">
              {" "}
              {format("dd-MM-yyyy", new Date(infoFilm?.ngayKhoiChieu))}
            </p>
          </div>
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Đạo diễn</p>
            <p className="contentInfo_nav ng-binding"> Kay Nguyễn </p>
          </div>
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Diễn viên</p>
            <p className="contentInfo_nav ng-binding">Hương Giang, Puka</p>
          </div>
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Thể Loại</p>
            <p className="contentInfo_nav ng-binding">hài hước, hành động</p>
          </div>
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Định dạng</p>
            <p className="contentInfo_nav ng-binding">2D/Digital</p>
          </div>
          <div className="row rowLeftInfo_nav">
            <p className="contentTitle_nav">Quốc Gia SX</p>
            <p className="contentInfo_nav ng-binding">Việt Nam</p>
          </div>
        </div>
        <div className="col-md-6 info_nav_right">
          <p className="contentTitle_nav">Nội dung</p>
          <div className="wpcontent_nav_right">
            <p className="p_content_nav_right">{infoFilm?.moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoFilmDetail;
