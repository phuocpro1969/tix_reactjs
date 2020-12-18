import React, { useEffect } from "react";
import BottomContentDetail from "../../component/DetailPage/BottomContentDetail";
import TopContentDetail from "../../component/DetailPage/TopContentDetail";
import "./Detail.scss";
import { useDispatch, useSelector } from "react-redux";
import { getInfoDetailFilmRequest } from "../../redux/actions/Detail";
import { useParams } from "react-router-dom";
import Loading from "../../component/Loading";
function Detail(props) {
  let dispatch = useDispatch();
  let { idFilm } = useParams();
  console.log(idFilm);
  useEffect(() => {
    dispatch(getInfoDetailFilmRequest(idFilm));
  }, []);
  let isLoading = useSelector((state) => {
    return state.CommonReducer.isLoading;
  });
  function renderDetail() {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <section className="content">
          <TopContentDetail />
          <BottomContentDetail />
        </section>
      );
    }
  }
  return <React.Fragment>{renderDetail()}</React.Fragment>;
}

export default Detail;
