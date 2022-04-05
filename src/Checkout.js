import React from "react";
import Header from "./Header";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "./css/Checkout.css";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_ad" src="/img/ad-1.jpeg" alt="" />
          <div>
            <h2 className="checkout_title">{user?.email}의 장바구니입니다.</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
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
