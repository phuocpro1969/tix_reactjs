import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import BookingPageLeft from "../../component/BookingPage/BookingPageLeft";
import BookingPageRight from "../../component/BookingPage/BookingPageRight";
import "./booking.scss";
import { getBookingRequest } from "../../redux/actions/Booking";
function Booking(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  let dispatch = useDispatch();
  let { code } = useParams();
  // console.log(code);
  let bookingInfo = useSelector((state) => {
    return state.BookingReducer.bookingInfo;
  });

  useEffect(() => {
    dispatch(getBookingRequest(code));
  }, []);
  function renderbookingPage(user) {
    if (user) {
      if (bookingInfo) {
        return (
          <div className="container wrapper__bookingpage">
            <div className="row no-gutters">
              <BookingPageLeft bookingInfo={bookingInfo} />
              <BookingPageRight bookingInfo={bookingInfo} />
            </div>
          </div>
        );
      }
    } else {
      return <Redirect exact={true} from={`/Booking/${code}`} to="/Login" />;
    }
  }
  return <>{renderbookingPage(user)}</>;
}

export default Booking;
