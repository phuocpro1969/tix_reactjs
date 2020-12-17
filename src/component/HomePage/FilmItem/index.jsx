import React from "react";
import { NavLink } from "react-router-dom";
import "./FilmItem.scss";
function FilmItem(props) {
  let { movieItem } = props;
  // console.log(movieItem);
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-sm-6--fixed col-6 text-center">
      <div className="film">
        <NavLink to={`/Detail/${movieItem?.maPhim}`} className="link__film">
          <img src={movieItem?.hinhAnh} alt="anh" />
          <div className="hoverInfo">
            <button type="button" data-toggle="modal" data-target="#myModal">
              <img src="./images/play-video.png" alt="btn" />
            </button>
          </div>
        </NavLink>
        <div className="info__film text-left">
          <div className="nameFilm">
            {/* <span className="codeFilm">C18</span> */}
            {movieItem?.tenPhim}
          </div>
          <div className="timeFilm">100 phút - {movieItem?.danhGia}IMDb</div>
          <div className="showHover">
            <NavLink to={`/Detail/${movieItem?.maPhim}`} className="text-white">
              Mua vé
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmItem;
