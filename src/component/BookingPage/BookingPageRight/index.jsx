import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./bookingPageRight.scss";
import { postBookingTicketRq } from "../../../redux/actions/Booking";
import { useHistory } from "react-router-dom";
function BookingPageRight(props) {
  let { codeShowTime } = props;
  let history = useHistory();
  let { bookingInfo } = props;
  let dispatch = useDispatch();
  let listSeatSelected = useSelector((state) => {
    return state.BookingReducer.listSeatSelected;
  });
  let total = useSelector((state) => {
    return state.BookingReducer.total;
  });
  function renderListCodeSeat() {
    if (listSeatSelected) {
      return listSeatSelected.map((item, index) => {
        return <span key={index}>{item.codeSeat} </span>;
      });
    }
  }
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (value) => {
    let listTickets;
    listTickets = listSeatSelected.map((seat) => ({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe,
    }));
    dispatch(postBookingTicketRq(codeShowTime, listTickets, history));
    console.log(value);
  };
  return (
    <div
      className="col-md-12 col-xl-4 col-sm-12 checkOut w-4--fixed"
      id="IdCheckOut"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="checkOut__info">
          <div className="ck__info__totalPrice text-center">
            <p>
              {new Intl.NumberFormat().format(total)}
              <span>đ</span>
            </p>
          </div>
          <div className="ck__info__film">
            <h4>
              <span>C18</span>
              {bookingInfo.tenPhim}
            </h4>
            <p>{bookingInfo.diaChi}</p>
            <p>
              {bookingInfo.ngayChieu} - {bookingInfo.gioChieu} -{" "}
              {bookingInfo.tenRap}
            </p>
          </div>
          <div className="ck__info__seat row rowSeat--fixed no-gutters">
            <div className="col-md-8">
              <p className="info__seat__choose">{renderListCodeSeat()}</p>
            </div>
            <div className="col-md-4">
              <p className="info__seat__price text-right">
                {new Intl.NumberFormat().format(total)}đ
              </p>
            </div>
          </div>
          <div className="ck__info__email">
            <div className="ck__info__wrapperEmail">
              <input
                type="text"
                id="email"
                name="email"
                className="txtEmail"
                required
                ref={register({
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                })}
              />
              <div className="barInputEmail" />
              <label className="label__email" htmlFor="email">
                E-Mail
              </label>
            </div>
            {errors.email && errors.email.type === "required" && (
              <p style={{ color: "red", marginTop: "7px" }}>
                *Email is required!
              </p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p style={{ color: "red", marginTop: "7px" }}>
                *Email is not valid!
              </p>
            )}
          </div>
          <div className="ck__info__phone">
            <div className="ck__info__wrapperPhone">
              <input
                type="text"
                id="phone"
                className="txtPhone"
                name="phone"
                required
                ref={register({
                  required: true,
                  minLength: 8,
                  pattern: /(09|03|07|08|05)+([0-9]{8})\b/,
                })}
              />
              <div className="barInputPhone" />
              <label className="label__phone" htmlFor="phone">
                Phone
              </label>
            </div>
            {errors.phone && errors.phone.type === "minLength" && (
              <p style={{ color: "red", marginTop: "7px" }}>
                *Phone has minLength of 8!
              </p>
            )}
            {errors.phone && errors.phone.type === "required" && (
              <p style={{ color: "red", marginTop: "7px" }}>
                *Phone is required!
              </p>
            )}
            {errors.phone && errors.phone.type === "pattern" && (
              <p style={{ color: "red", marginTop: "7px" }}>
                *Phone start 09|03|07!
              </p>
            )}
          </div>
        </div>
        <div className="ck__info__bottom">
          <div className="ck__info__notification">
            <div className="autoCenter__Bottom">
              <p>
                <img
                  src="../../../../images/exclamation.png"
                  alt="exclamation"
                />
                Vé đã mua không thể đổi hoặc hoàn tiền
              </p>
              <p>
                Mã vé sẽ được gửi qua tin nhắn <span>ZMS</span>(tin nhắn Zalo)
                và <span>Email</span> đã nhập
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-secondary btn__bookTickets"
            disabled={listSeatSelected.length > 0 ? false : true}
          >
            ĐẶT VÉ
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingPageRight;
