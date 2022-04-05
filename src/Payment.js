import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import "./css/Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="payment">
        <div className="payment_container">
          <Link to="/checkout">
            <h1>장바구니로 돌아가기</h1>
          </Link>
          <h1>({basket?.length} 개의 상품이 존재합니다.)</h1>
          <div className="payment_section">
            <div className="payment_title">
              <h3>배달 받을 곳</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email} 님의 주소</p>
              <p>강원도</p>
              <p>강릉</p>
            </div>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>상품 목록</h3>
          </div>
          <div className="payment_items">
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>결제하기</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
