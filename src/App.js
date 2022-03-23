import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
