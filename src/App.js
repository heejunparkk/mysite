import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import "./css/App.css";

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
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
