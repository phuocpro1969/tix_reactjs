import React from "react";
import Banner from "../../component/HomePage/Banner";
import SelectMenu from "../../component/HomePage/SelectMenu";
import ListTabFilm from "../../component/HomePage/ListTabFilm";
import "./home.scss";
import CinemaSysHome from "../../component/HomePage/CinemaSysHome";
import Application from "../../component/HomePage/Application";
import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
function Home(props) {
  let isLoading = useSelector((state) => {
    return state.CommonReducer.isLoading;
  });
  function renderHome() {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="wrapper" id="wp-content">
          <Banner />
          <SelectMenu />
          <ListTabFilm />
          <CinemaSysHome />
          <Application />
        </div>
      );
    }
  }
  return <React.Fragment>{renderHome()}</React.Fragment>;
}
export default Home;
