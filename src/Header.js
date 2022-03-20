import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt="Logo"
          src={process.env.PUBLIC_URL + `/img/png01.png`}
        />
      </Link>

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

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketOutlined />
            <span className="header_optionLineTwo_basket"> 0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
