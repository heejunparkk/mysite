import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
