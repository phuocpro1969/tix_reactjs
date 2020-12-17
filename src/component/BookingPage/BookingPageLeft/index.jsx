import React, { useEffect, useState } from "react";
import ListSeat from "../ListSeat";
import "./bookingPageLeft.scss";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ResetActiveNotify } from "../../../redux/actions/Booking";
function changeColorTex(logo) {
  if (logo === "BHD Star Cineplex ") {
    return "greenColorTextBrand";
  } else if (logo === "CGV ") {
    return "purpleColorTextBrand";
  } else if (logo === "CNS ") {
    return "pinkColorTextBrand";
  } else if (logo === "GLX ") {
    return "grayColorTextBrand";
  } else if (logo === "Lotte ") {
    return "redColorTextBrand";
  } else {
    return "orangeColorTextBrand";
  }
}
const user = JSON.parse(localStorage.getItem("user"));
function BookingPageLeft(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let countNotify = useSelector((state) => {
    return state.BookingReducer.activeNotification;
  });
  let { bookingInfo } = props;
  let arrTenCumRap = bookingInfo.tenCumRap.split("-");
  let [minute, setminute] = useState(2);
  let [second, setsecond] = useState(59);
  let Time;
  useEffect(() => {
    if (second !== 0) {
      Time = setInterval(() => {
        let newSecond = second - 1;
        setsecond(newSecond);
      }, 1000);
      return () => clearInterval(Time);
    } else {
      return function cleanup() {
        clearInterval(Time);
      };
    }
  });
  useEffect(() => {
    if (second === 0 && minute > 0) {
      setsecond(59);
      setminute((m) => m - 1);
    } else {
      if (second === 0 && minute === 0) {
        swal({
          title: "TIME UP",
          text: "Do you want to book again?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((ress) => {
          if (ress) {
            swal("PLEASE BOOKING AGAIN IN 2:60!", {
              icon: "success",
              button: "CONFIRM",
            }).then(() => {
              window.location.reload(false);
            });
          } else {
            history.push("/");
          }
        });
      }
    }
  }, [second]);
  useEffect(() => {
    if (countNotify !== 0) {
      swal("You shouldn't leave the middle seat empty!").then(() => {
        dispatch(ResetActiveNotify(0));
      });
    }
  }, [countNotify]);
  return (
    <div className="col-md-12 col-xl-8 col-sm-12 chooseSeat w-8--fixed">
      <section className="chooseSeat__header">
        <ul className="chooseSeat__header__process">
          <li>01 CHỌN GHẾ &amp; THANH TOÁN</li>
          <li>02 KẾT QUẢ ĐẶT VÉ</li>
        </ul>
        <div className="chooseSeat__header__infoUser">
          <p className="titleDisplay">
            <img width="30px" src="../../../../images/user.png" alt="user" />
            {user ? user.taiKhoan : ""}
          </p>
        </div>
      </section>
      <section className="chooseSeat__content">
        <div className="chooseSeat__content__wrapper">
          <div className="cs__content__top">
            <div className="cs__content__topLeft">
              <div className="wp_thunkFilm">
                <img
                  width="50px"
                  src="../../../../images/beta.png"
                  alt="beta"
                />
              </div>
              <div className="cs__topLeft__infoFilm ml-3">
                <p className="text-dark animationTextCinema">
                  <span className={changeColorTex(arrTenCumRap[0])}>
                    {arrTenCumRap[0]}
                  </span>
                  - {arrTenCumRap[1]}
                </p>
                <p className="time__showFilm">
                  {bookingInfo.ngayChieu} - {bookingInfo.gioChieu} -
                  {bookingInfo.tenRap}
                </p>
              </div>
            </div>
            <div className="cs__content__topRight">
              <p>thời gian giữ ghế</p>
              <p className="time__selected__seat">
                <span>{minute}</span>:{second}
              </p>
            </div>
          </div>
          <div className="cs__content__bottom">
            <div className="screen">
              <img src="../../../../images/screen.png" alt="screen" />
            </div>
            <ListSeat />
            <div className="autoCenter">
              <div className="title__seat">
                <div className="title__seat__common title__seat__normal">
                  <span className="sp__seat sp__seat__normal" />
                  <span className="sp__seat__text">Ghế thường</span>
                </div>
                <div className="title__seat__common title__seat__vip">
                  <span className="sp__seat sp__seat__vip" />
                  <span className="sp__seat__text">Ghế vip</span>
                </div>
                <div className="title__seat__common title__seat__disable">
                  <span className="sp__seat sp__seat__disable" />
                  <span className="sp__seat__text">Ghế không thể chọn</span>
                </div>
                <div className="title__seat__common title__seat__selected">
                  <span className="sp__seat sp__seat__selected" />
                  <span className="sp__seat__text">Ghế đang chọn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="btn text-center w-50 Active__btn__bookingResponsive">
        thanh toán
      </button>
    </div>
  );
}

export default BookingPageLeft;
