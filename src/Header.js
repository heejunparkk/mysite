import { Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={process.env.PUBLIC_URL + `/img/png01.png`}
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne"> 안녕하세요!!</span>
          <span className="header_optionLineTwo"> Login</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> 돌아가기</span>
          <span className="header_optionLineTwo"> 주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> 반가워요</span>
          <span className="header_optionLineTwo"> 좋아요</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
