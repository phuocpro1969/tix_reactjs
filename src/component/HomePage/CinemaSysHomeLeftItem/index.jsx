import React from "react";
import "./CinemaSysHomeLeftItem.scss";
function CinemaSysHomeLeftItem(props) {
  let { item, active, handleItemClick, idx, setIdLogo, setTrangThai } = props;
  //   console.log(active);
  function handleClickCinemaSys() {
    handleItemClick(idx);
    setIdLogo(item.maHeThongRap);
    setTrangThai(true);
  }
  return (
    <li
      className={active ? "tab__item active__opacity" : "tab__item"}
      onClick={handleClickCinemaSys}
    >
      <a className="tab__item__SysLink">
        <img src={item.logo} className="img-fluid" alt="anh" />
      </a>
    </li>
  );
}
export default CinemaSysHomeLeftItem;
