import React from "react";
import { useSelector } from "react-redux";
import SelectMenuTimeItem from "../SelectMenuTimeItem";
import "./SelectMenuTime.scss";
function SelectMenuTime(props) {
  let listTime = useSelector((state) => {
    return state.SelectMenuReducer.arrLichChieu;
  });
  let filmItem = useSelector((state) => {
    return state.SelectMenuReducer.statusLichChieu;
  });
  let statusDate = useSelector((state) => {
    return state.SelectMenuReducer.statusDate;
  });
  // console.log(filmItem);
  // console.log(statusDate);
  console.log(listTime);
  function showListTime() {
    return listTime?.map((item, index) => {
      return <SelectMenuTimeItem item={item} key={index} />;
    });
  }
  return (
    <div className="dropdown dropdown--fixed wp__CinemaInterest">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="CinemaInterest__movieDropdown">
          {filmItem === null || filmItem === -1 ? "Suất chiếu" : filmItem}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listDate shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {statusDate !== -1 && statusDate !== null ? (
          showListTime()
        ) : (
          <li className="dropdown-item text-center text-danger text__err">
            vui lòng chọn ngày
          </li>
        )}
      </ul>
    </div>
  );
}

export default SelectMenuTime;
