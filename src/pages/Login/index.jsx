import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import style from "./Login.module.scss";
import { handleUserLoginRequest } from "../../redux/actions/User";
function Login(props) {
  let history = useHistory();
  let dispatch = useDispatch();
  let [userLogin, setUserLogin] = useState({
    values: { taiKhoan: "", matKhau: "" },
    errors: { taiKhoan: "", matKhau: "" },
  });
  function handleChange(e) {
    let tagInput = e.target;
    // console.log(tagInput);
    let { name, value } = tagInput;
    console.log(name, value);
    let errorMessage = "";
    if (value === "") {
      errorMessage = "*" + name + " is not empty";
    }
    let values = { ...userLogin.values, [name]: value };
    let errors = { ...userLogin.errors, [name]: errorMessage };
    setUserLogin({
      ...userLogin,
      values: values,
      errors: errors,
    });
  }
  function handleSubmitLogin(e) {
    e.preventDefault();
    dispatch(handleUserLoginRequest(userLogin.values, history));
  }
  return (
    <div className={style.wrapper__login}>
      <form action="" className={style.form}>
        <img
          className="mb-5"
          src="../../../images/logoLogin.png"
          alt="logo"
          style={{ width: "180px" }}
        />
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className={(style.form__group, style.field)}>
              <input
                type="text"
                className={style.form__field}
                placeholder="taiKhoan"
                name="taiKhoan"
                value={userLogin.values.taiKhoan}
                id="taiKhoan"
                required
                onChange={handleChange}
              />
              <label htmlFor="taiKhoan" className={style.form__label}>
                username
              </label>
              <span className={style.errorMes}>
                {userLogin.errors.taiKhoan}
              </span>
            </div>
          </div>

          <div className="col-md-12 my-3">
            <div className={(style.form__group, style.field)}>
              <input
                type="password"
                className={style.form__field}
                placeholder="matKhau"
                name="matKhau"
                value={userLogin.values.matKhau}
                id="matKhau"
                required
                onChange={handleChange}
              />
              <label htmlFor="matKhau" className={style.form__label}>
                password
              </label>
              <span className={style.errorMes}>{userLogin.errors.matKhau}</span>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger w-100 mt-3"
          onClick={handleSubmitLogin}
        >
          Đăng nhập
        </button>
        <NavLink className={style.link__Reg} to="/Reg">
          Đăng ký
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
