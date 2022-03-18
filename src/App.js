import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>장바구니 페이지.</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
