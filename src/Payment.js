import React from "react";
import Header from "./Header";
import "./css/Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="Payment"></div>;
    </div>
  );
}

export default Payment;
