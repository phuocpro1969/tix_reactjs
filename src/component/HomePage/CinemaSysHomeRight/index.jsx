import { useSelector } from "react-redux";
import CinemaSysHomeRightItem from "../CinemaSysHomeRightItem";
import "./CinemaSysHomeRight.scss";
function CinemaSysHomeRight(props) {
  let listMovie = useSelector((state) => {
    return state.CinemaHome.ListFilm;
  });
  let inFoShowTimeOfSys = useSelector((state) => {
    return state.CinemaHome.InfoShowTimeEachSys;
  });
  let CinemaBrandSelected = useSelector((state) => {
    return state.CinemaHome.CinemaBrandSelected;
  });
  function ShowListFilmByLogo() {
    if (inFoShowTimeOfSys[0] !== undefined) {
      let listMaCumRap = inFoShowTimeOfSys[0].lstCumRap.map((i, idx) => {
        return i.maCumRap;
      });
      // console.log(listMaCumRap);
      let vitri = listMaCumRap.indexOf(CinemaBrandSelected);
      // console.log(vitri);
      if (vitri === -1) {
        return (
          <p className="text-danger text-center">
            Hiện tại rạp chưa có lịch chiếu!
          </p>
        );
      } else {
        // console.log(listMovie);
        if (listMovie.length > 0) {
          return listMovie?.map((item, index) => {
            return <CinemaSysHomeRightItem item={item} key={index} />;
          });
        } else {
          return (
            <p className="text-danger text-center">
              Hiện tại rạp chưa có lịch chiếu!
            </p>
          );
        }
      }
    } else {
      return (
        <p className="text-danger text-center">
          Hiện tại rạp chưa có lịch chiếu!
        </p>
      );
    }
  }
  return <div className="tab__content__filmShow">{ShowListFilmByLogo()}</div>;
}

export default CinemaSysHomeRight;
