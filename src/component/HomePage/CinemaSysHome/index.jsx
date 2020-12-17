import React, { useEffect, useState } from "react";
import CinemaSysHomeLeft from "../CinemaSysHomeLeft";
import CinemaSysHomeMiddle from "../CinemaSysHomeMiddle";
import CinemaSysHomeRight from "../CinemaSysHomeRight";
import { GetListCinemaBrandRequest } from "../../../redux/actions/CinemaBrand";
import { GetInfoShowTimeOfEachSys } from "../../../redux/actions/CinemaSys";
import "./CinemaSysHome.scss";
import { useDispatch } from "react-redux";
function CinemaSysHome(props) {
  let [idlogo, setidlogo] = useState("BHDStar");
  let [activeRap1, setactiveRap1] = useState(false);
  let dispatch = useDispatch();
  // console.log(activeRap1);
  function setIdLogo(id) {
    dispatch(GetInfoShowTimeOfEachSys(id));
    setidlogo(id);
  }
  function setTrangThai(status) {
    setactiveRap1(status);
  }
  useEffect(() => {
    dispatch(GetListCinemaBrandRequest(idlogo));
    dispatch(GetInfoShowTimeOfEachSys(idlogo));
  }, []);
  useEffect(() => {
    dispatch(GetListCinemaBrandRequest(idlogo));
  }, [idlogo]);
  return (
    <div className="wrapper__systemCinema--fixed">
      <div className="row">
        <div className="col-md-12">
          <div className="bg__back-news" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="wrapper__tab shadow-sm" id="section2">
            <h3>hệ thống rạp</h3>
            <CinemaSysHomeLeft
              setIdLogo={setIdLogo}
              setTrangThai={setTrangThai}
            />
            <CinemaSysHomeMiddle
              activeRap1={activeRap1}
              setactiveRap1={setactiveRap1}
              setTrangThai={setTrangThai}
            />
            <CinemaSysHomeRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaSysHome;
