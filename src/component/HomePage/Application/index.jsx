import React from "react";
import "react-owl-carousel2/lib/OwlCarousel";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import OwlCarouselApp from "react-owl-carousel2";
import "./Application.scss";
function Application(props) {
  const options = {
    items: 1,
    nav: false,
    rewind: true,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayTimeout: 3000,
  };
  return (
    <section className="wp__application" id="section4">
      <div className="bg__application">
        <div className="application">
          <div className="row row__app--fixed no-gutters">
            <div className="col-md-12 col-lg-6 application__text text-light">
              <p className="app__textLeft">Ứng dụng dành cho</p>
              <p className="app__textLeft">người yêu điện ảnh</p>
              <p className="app__textSmartLeft">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn__downloadApp">
                App miễn phí - Tải về ngay!
              </button>
              <p className="textAppUnder">
                TIX có hai phiên bản <a>IOS</a> &amp; <a>Android</a>
              </p>
            </div>
            <div className="col-md-12 col-lg-6 application__sliderMobie">
              <img src="./images/mobile.png" alt="dien thoai" />
              <div className="wp__appCarousel">
                <OwlCarouselApp options={options}>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slick1.jpg" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide2.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide3.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide4.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide5.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide6.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide6.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide7.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide8.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide9.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide10.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide11.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide12.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide13.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide14.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide15.jpg" alt="anh" />
                    </a>
                  </div>
                  <div className="item mx-0">
                    <a>
                      <img src="./images/slide16.jpg" alt="anh" />
                    </a>
                  </div>
                </OwlCarouselApp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
