import React from "react";
import "./FilmItem.scss";
function FilmItem(props) {
  let { movieItem } = props;
  // console.log(movieItem);
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-sm-6--fixed text-center">
      <div className="film">
        <a className="link__film">
          <img src={movieItem?.hinhAnh} alt="anh" />
          <div className="hoverInfo">
            <button type="button" data-toggle="modal" data-target="#myModal">
              <img src="./images/play-video.png" alt="btn" />
            </button>
          </div>
        </a>
        <div className="info__film text-left">
          <div className="nameFilm">
            {/* <span className="codeFilm">C18</span> */}
            {movieItem?.tenPhim}
          </div>
          <div className="timeFilm">100 phút - {movieItem?.danhGia}IMDb</div>
          <div className="showHover">
            <a className="text-white">Mua vé</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmItem;
