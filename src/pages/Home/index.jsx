import React from "react";
import Banner from "../../component/HomePage/Banner";
import Header from "../../component/HomePage/Header";
import SelectMenu from "../../component/HomePage/SelectMenu";
import ListTabFilm from "../../component/HomePage/ListTabFilm";
import "./home.scss";
import CinemaSysHome from "../../component/HomePage/CinemaSysHome";
import Application from "../../component/HomePage/Application";
import Footer from "../../component/HomePage/Footer";

function Home(props) {
  return (
    <div className="wrapper" id="wp-content">
      <Header />
      <Banner />
      <SelectMenu />
      <ListTabFilm />
      <CinemaSysHome />
      <Application />
      <Footer />
    </div>
  );
}
export default Home;
