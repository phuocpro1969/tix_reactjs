import React, { useEffect } from "react";
import TabFilmComingSoon from "../TabFilmComingSoon";
import TabFilmShowing from "../TabFilmShowing";
import "./ListTabFilm.scss";
import { GetListMovieRequest } from "../../../redux/actions/GetListMovie";
import { useDispatch, useSelector } from "react-redux";
function ListTabFilm(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListMovieRequest());
  }, []);
  let listMovie = useSelector((state) => {
    return state.Movie.listMovie;
  });
  return (
    <div className="wrapper__ContentListFilmTix" id="section1">
      <section className="wp__filmListNav">
        <ul className="nav nav-tabs nav__tabListFilm" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="showing-tab"
              data-toggle="tab"
              href="#Showing"
              role="tab"
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="coming-tab"
              data-toggle="tab"
              href="#ComingSoon"
              role="tab"
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
        <div
          className="tab-content container-fluid container-fluid--fixed"
          id="myTabContent"
        >
          <TabFilmShowing listMovie={listMovie} />
          <TabFilmComingSoon listMovie={listMovie} />
        </div>
      </section>
    </div>
  );
}

export default ListTabFilm;
