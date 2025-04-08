import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성성",
  ];
  return (
    <>
      <div className="login-wrap">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="logo-wrap">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="hnm-logo"
        />
      </div>
      <div className="menu-wrap">
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="input-wrap">
          <FontAwesomeIcon icon={faSearch} />
          <input className="search-input" type="text" placeholder="제품 검색" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
