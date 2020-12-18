import React, { useEffect } from "react";
import Banner from "../../component/HomePage/Banner";
import SelectMenu from "../../component/HomePage/SelectMenu";
import ListTabFilm from "../../component/HomePage/ListTabFilm";
import "./home.scss";
import CinemaSysHome from "../../component/HomePage/CinemaSysHome";
import Application from "../../component/HomePage/Application";
import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
import { cleanup } from "@testing-library/react";
function Home(props) {
  let isLoading = useSelector((state) => {
    return state.CommonReducer.isLoading;
  });
  // useEffect(() => {
  //   if (isLoading === false) {
  //     return cleanup(<Loading />);
  //   }
  // }, [isLoading]);
  console.log(isLoading);
  function renderHome() {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="wrapper" id="wp-content">
          <Banner />
          <SelectMenu />
          <ListTabFilm />
          {/* {isLoadingSys} */}
          <CinemaSysHome />
          <Application />
        </div>
      );
    }
  }
  // return <React.Fragment>{renderHome()}</React.Fragment>;
  return (
    <div className="wrapper" id="wp-content">
      <Banner />
      <SelectMenu />
      <ListTabFilm />
      {/* {isLoadingSys} */}
      <CinemaSysHome />
      <Application />
    </div>
  );
}
export default Home;
