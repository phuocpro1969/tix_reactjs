import React from "react";
import format from "date-format";
function ListSessionHomeRightItem(props) {
  let { item } = props;
  let TimeEnd;
  if (item !== undefined) {
    TimeEnd = parseInt(format("hh", new Date(item.ngayChieuGioChieu))) + 2;
  }
  return (
    <a className="session__filmShow__item">
      <span>{format("hh:mm", new Date(item.ngayChieuGioChieu))}</span> ~
      {TimeEnd + format(":mm", new Date(item.ngayChieuGioChieu))}
    </a>
  );
}

export default ListSessionHomeRightItem;
