import React from "react";
import "react-owl-carousel2/lib/OwlCarousel";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel2";
import ListFilm from "../ListFilm";

function TabFilmComingSoon(props) {
  let rows = [];
  let { listMovie } = props;
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
  };
  function showPageSlider() {
    if (listMovie.length > 0) {
      let totalPage = Math.ceil(listMovie.length / 8);
      // console.log(totalPage);
      for (let i = 1; i <= totalPage; i++) {
        rows.push(
          <ListFilm
            key={i + "keyAsdAsad"}
            pageItem={i}
            listMovie={listMovie}
            totalPage={totalPage}
          />
        );
      }
      return <OwlCarousel options={options}>{rows}</OwlCarousel>;
    }
  }
  return (
    <div className="tab-pane fade" id="ComingSoon" role="tabpanel">
      {showPageSlider()}
    </div>
  );
}

export default TabFilmComingSoon;
