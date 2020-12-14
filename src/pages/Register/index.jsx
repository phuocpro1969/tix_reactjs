import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import style from "./Register.module.scss";
import { RegMemberFromForm } from "../../redux/actions/User";
import { ResetErMess } from "../../redux/actions/User";
function Register(props) {
  let messEr = useSelector((state) => {
    return state.UserReducer.messError;
  });
  console.log(messEr);
  let dispatch = useDispatch();
  let history = useHistory();
  let [userReg, setUserReg] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
  });
  function handleChange(e) {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;
    console.log(name, value);
    let errorMes = "";
    if (value === "") {
      errorMes = "*" + name + " is not empty!";
    }
    if (type === "email") {
      if (value === "") {
        errorMes = name + " is not empty!";
      } else {
        let reg = new RegExp(pattern);
        if (!reg.test(value)) {
          errorMes = name + " is not valid!";
        }
      }
    }
    if (name === "soDt") {
      if (value === "") {
        errorMes = name + " is not empty!";
      } else {
        let reg = new RegExp(pattern);
        if (!reg.test(value)) {
          errorMes = name + " is not valid!";
        }
      }
    }
    let values = { ...userReg.values, [name]: value };
    let errors = { ...userReg.errors, [name]: errorMes };
    setUserReg({
      ...userReg,
      values: values,
      errors: errors,
    });
  }
  function handleRegForm(e) {
    e.preventDefault();
    console.log(userReg.values);
    for (let key in userReg.values) {
      if (userReg.values[key] === "") {
        alert("You need to provide info!");
        return;
      }
    }
    for (let key in userReg.errors) {
      if (userReg.errors[key] !== "") {
        alert("info must be valid before submit!");
        return;
      }
    }
    dispatch(RegMemberFromForm(userReg.values, history));
    if (messEr) {
      // dispatch(ResetErMess(""));
    }
  }
  return (
    <div className={style.wrapper__reg}>
      <form action="" className={style.form}>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img
                src="../../../images/logoLogin.png"
                alt="anh"
                style={{ width: "180px" }}
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <div className={(style.form__group, style.field)}>
              <input
                type="text"
                className={style.form__field}
                placeholder="taiKhoan"
                name="taiKhoan"
                id="taiKhoan"
                required
                onChange={handleChange}
              />
              <label htmlFor="taiKhoan" className={style.form__label}>
                username
              </label>
              <span className={style.errorMes}>{userReg.errors.taiKhoan}</span>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className={(style.form__group, style.field)}
              style={{ height: "60px" }}
            >
              <input
                type="password"
                className={style.form__field}
                placeholder="matKhau"
                name="matKhau"
                id="matKhau"
                required
                onChange={handleChange}
              />
              <label htmlFor="matKhau" className={style.form__label}>
                password
              </label>
              <span className={style.errorMes}>{userReg.errors.matKhau}</span>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-6">
            <div
              className={(style.form__group, style.field)}
              style={{ height: "60px" }}
            >
              <input
                type="text"
                className={style.form__field}
                placeholder="hoTen"
                name="hoTen"
                id="hoTen"
                required
                onChange={handleChange}
              />
              <label htmlFor="hoTen" className={style.form__label}>
                fullname
              </label>
              <span className={style.errorMes}>{userReg.errors.hoTen}</span>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className={(style.form__group, style.field)}
              style={{ height: "60px" }}
            >
              <input
                type="email"
                className={style.form__field}
                placeholder="email"
                name="email"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                onChange={handleChange}
              />
              <label htmlFor="email" className={style.form__label}>
                email
              </label>
              <span className={style.errorMes}>{userReg.errors.email}</span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div
              className={(style.form__group, style.field)}
              style={{ height: "60px" }}
            >
              <input
                type="text"
                className={style.form__field}
                placeholder="soDt"
                name="soDt"
                id="soDt"
                pattern="((09|03|07|08|05)+([0-9]{8})\b)"
                required
                onChange={handleChange}
              />
              <label htmlFor="soDt" className={style.form__label}>
                phone
              </label>
              <span className={style.errorMes}>{userReg.errors.soDt}</span>
            </div>
          </div>
        </div>
        <button className="btn btn-success mt-4 w-100" onClick={handleRegForm}>
          Registration
        </button>
        <NavLink className={style.link__Reg} to="/Login">
          Login
        </NavLink>
        {messEr ? <span className={style.errorMesFin}>{messEr}</span> : null}
      </form>
    </div>
  );
}

export default Register;
