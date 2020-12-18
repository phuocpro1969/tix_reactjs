import React from "react";
import FilmItem from "../FilmItem";

function ListFilm(props) {
  let listItemOnOnePage = [];
  let { pageItem, listMovie, totalPage } = props;
  // console.log(d);
  // console.log(pageItem);
  // console.log(listMovie);
  let firstItem = (pageItem - 1) * 8;
  let finalItem = 8 * pageItem - 1;
  function showListMovieOnEachPage() {
    if (pageItem !== totalPage) {
      for (let i = firstItem; i <= finalItem; i++) {
        // console.log(listMovie[i]);
        listItemOnOnePage.push(
          <FilmItem movieItem={listMovie[i]} code={i} key={i + "keynesad"} />
        );
      }
    } else {
      for (let i = firstItem; i < listMovie?.length; i++) {
        listItemOnOnePage.push(
          <FilmItem movieItem={listMovie[i]} key={i + "keyne12344"} />
        );
      }
    }
    return (
      <div className="row list__filmShowing no-gutters">
        {listItemOnOnePage}
      </div>
    );
  }
  return <>{showListMovieOnEachPage()}</>;
}

export default ListFilm;
