import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import "./css/Payment.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true); //결제 처리중표시됨
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing("");
        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : ""); //카드번호 잘못적었을때 에러 보여줌
  };

  return (
    <div>
      <Header />
      <div className="payment">
        <div className="payment_container">
          <Link to="/checkout" className="checkoutlink">
            <h1>
              장바구니로 돌아가기 ({basket?.length} 개의 상품이 존재합니다.)
            </h1>
          </Link>

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

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        총액 ( {basket?.length} items) :{" "}
                        <strong> {value} 원 </strong>
                      </p>
                      <small className="subtotal_gift">
                        <input type="checkbox" /> 체크박스입니다.
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={"₩"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>
                    {processing ? <p>결제 중 입니다.</p> : "결제하기"}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
