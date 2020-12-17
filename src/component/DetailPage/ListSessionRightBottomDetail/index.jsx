import React from "react";
import SessionRightBottomDetailItem from "../SessionRightBottomDetailItem";
import "./ListSessionRightBottomDetail.scss";

function ListSessionRightBottomDetail(props) {
  let { listSession } = props;
  console.log(listSession);
  const renderTime = () => {
    return listSession.map((item, index) => {
      return <SessionRightBottomDetailItem item={item} key={index + "time"} />;
    });
  };
  return <div className="list_sessionDetailShowTimes">{renderTime()}</div>;
}
export default ListSessionRightBottomDetail;
