import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_ad" src="/img/ad-1.jpeg" alt="" />
          <div className="checkout_title">
            <h1>장바구니입니다.</h1>
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
