import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TopContentDetail.scss";
import format from "date-format";
import ModalDetail from "../ModalDetail";
function CountStar(data) {
  if (data >= 0 && data <= 3) {
    return 1;
  }
  if (data >= 4 && data <= 5) {
    return 2;
  }
  if (data >= 6 && data <= 7) {
    return 3;
  }
  if (data >= 8 && data <= 9) {
    return 4;
  }
  if (data >= 10) {
    return 5;
  }
}
function TopContentDetail(props) {
  let [activeModal, setActiveModal] = useState(true);
  let infoFilm = useSelector((state) => {
    return state.DetailReducer.infoFilm;
  });
  function handleClose(data) {
    setActiveModal(data);
  }
  function handleOpenTrailer() {
    setActiveModal(true);
  }
  function RenderStar(data) {
    let arrStar = [];
    for (let i = 1; i <= data; i++) {
      arrStar.push(
        <img
          src="../../../images/star1.png"
          alt="anh"
          className="img-fluid"
          key={i}
        />
      );
    }
    return arrStar;
  }
  return (
    <div className="top_content">
      <div className="top_content__responsiveDetail">
        <a
          className="play_responsive"
          // id="play_res_id"
          href="#"
          // onclick="ShowvideoResponsive()"
        >
          <img
            src="../../../images/play-video.png"
            alt="btn"
            className="img-fluid"
          />
        </a>
        <iframe
          title="myFrame"
          id="iframe-trailer"
          width="100%"
          height="100%"
          src={`${infoFilm?.trailer}`}
          frameBorder={0}
        ></iframe>
        <img src={infoFilm?.hinhAnh} className="img-fluid  w-100" alt="anh" />
      </div>
      <div className="top_content__overlay" />
      <div className="top_content__detail">
        <div className="row">
          <div
            className="wp_thumb col-md-3"
            style={{
              backgroundImage: `url(${infoFilm?.hinhAnh})`,
            }}
          >
            <button
              id="btn_playFullVideo"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="play_trailer"
              onClick={handleOpenTrailer}
            >
              <img
                src="../../../images/play-video.png"
                alt="anh"
                className="img-fluid"
              />
            </button>
          </div>
          <div className="col-md-5 detail_info">
            <div className="time_detail">
              <span>
                {format("dd-MM-yyyy", new Date(infoFilm?.ngayKhoiChieu))}
              </span>
            </div>
            <div className="title_detail">
              <span className="title_detail__Codespan">C16</span>
              <span className="title_detail__Contentspan">
                {infoFilm?.tenPhim}
              </span>
            </div>
            <div className="duration_detail">
              <span>91 phút-0 IMDb - 2D/Digital</span>
            </div>
            <button className="btn btn-danger btn__bookingTicketDetail">
              Mua vé
            </button>
          </div>
          <div className="col-md-4 rating-detail">
            <div className="percent">
              <svg>
                <circle cx={57} cy={57} r={57} />
                <circle cx={57} cy={57} r={57} />
              </svg>
              <div className="number">
                <h2>{infoFilm?.danhGia}</h2>
              </div>
            </div>
            <div className="star">
              {RenderStar(CountStar(infoFilm?.danhGia))}
              <img
                src="../../../images/star1.2.png"
                alt="anh"
                className="img-fluid star_number"
              />
            </div>
            <div className="vote mt-1">
              <span>271 người đánh giá</span>
            </div>
          </div>
        </div>
      </div>
      {infoFilm && activeModal ? (
        <ModalDetail trailer={infoFilm.trailer} handleClose={handleClose} />
      ) : (
        ""
      )}
    </div>
  );
}

export default TopContentDetail;
