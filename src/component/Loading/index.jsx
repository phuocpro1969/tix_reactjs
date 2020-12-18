import React from "react";
import "./Loading.scss";
function Loading(props) {
  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_one" />
          <div className="object" id="object_two" />
          <div className="object" id="object_three" />
          <div className="object" id="object_four" />
          <div className="object" id="object_five" />
          <div className="object" id="object_six" />
          <div className="object" id="object_seven" />
          <div className="object" id="object_eight" />
          <div className="object" id="object_nine" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
