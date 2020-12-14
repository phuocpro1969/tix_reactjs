import React from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import SelectMenuDateItem from "../SelectMenuDateItem";
import "./SelectMenuDate.scss";

function SelectMenuDate(props) {
  let listDate = useSelector((state) => {
    return state.SelectMenuReducer?.Onerap;
  });
  let statusDate = useSelector((state) => {
    return state.SelectMenuReducer.statusDate;
  });
  let statusCinemaSystem = useSelector((state) => {
    return state.SelectMenuReducer.statusCinemaSystem;
  });
  // console.log(listDate?.lichChieuPhim);
  function showListDate() {
    if (listDate !== null && listDate.lichChieuPhim !== null) {
      // console.log(listDate.lichChieuPhim);
      let newList = listDate?.lichChieuPhim.map((item, index) => {
        return format("yyyy-MM-dd", new Date(item.ngayChieuGioChieu));
      });
      // console.log(newList);
      let filterListDate = newList.filter(
        (item, index) => newList.indexOf(item) === index
      );
      return filterListDate.map((item, index) => {
        return <SelectMenuDateItem item={item} key={index} />;
      });
    }
  }
  // console.log(statusCinemaSystem);
  return (
    <div className="dropdown dropdown--fixed wp__timeSeeing">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
        // onClick={() => setShowErr(!showErr)}
      >
        <span className="timeSeeing__movieDropdown">
          {statusDate === -1 || statusDate === null ? "Ngày xem" : statusDate}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listDate shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {statusCinemaSystem !== null && statusCinemaSystem !== -1 ? (
          showListDate()
        ) : (
          <li className="dropdown-item text-center text-danger text__err">
            vui lòng chọn rạp
          </li>
        )}
      </ul>
    </div>
  );
}

export default SelectMenuDate;
