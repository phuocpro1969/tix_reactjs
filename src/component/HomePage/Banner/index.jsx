import React from "react";
import "./banner.scss";
function Banner(props) {
  return (
    <section className="carousel__tix">
      <div
        id="carouselExampleIndicators"
        className="carousel slide slide__banner"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active indicator__itemBanner"
          />
          <li
            data-target="#carouselExampleIndicators"
            className="indicator__itemBanner"
            data-slide-to={1}
          />
          <li
            data-target="#carouselExampleIndicators"
            className="indicator__itemBanner"
            data-slide-to={2}
          />
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item carousel-itemBanner--fixed  active">
            <img
              className="d-block w-100"
              src="https://s3img.vcdn.vn/123phim/2020/11/bhd-star-59k-ve-ca-tuan-16045660915386.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item carousel-itemBanner--fixed ">
            <img
              className="d-block w-100"
              src="https://s3img.vcdn.vn/123phim/2020/11/dong-gia-1k-ve-khi-mua-ve-qua-tix-16043766276410.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item carousel-itemBanner--fixed ">
            <img
              className="d-block w-100"
              src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Banner;
