import React from "react";
import Banner from "../../component/HomePage/Banner";
import SelectMenu from "../../component/HomePage/SelectMenu";
import ListTabFilm from "../../component/HomePage/ListTabFilm";
import "./home.scss";
import CinemaSysHome from "../../component/HomePage/CinemaSysHome";
import Application from "../../component/HomePage/Application";

function Home(props) {
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
export default Home;
