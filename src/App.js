import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import "./css/App.css";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KlT4JC3xifgcMaaUto8VKbgEOR8unIEe7G5liHkBpVnD6FLCHmLV6J4qLAPtnugRgfKedFIfGzg8n88oUwpR6kf00xQ2KLUlD"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
