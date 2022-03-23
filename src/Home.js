import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home_container">
          <img className="home_img" src="/img/제목 없는 디자인.png" alt="" />
          <div className="home_row">
            <Product
              id="1"
              title="제품1"
              price={"10,000"}
              image="/img/doodle mat - image 01 - 3.jpg"
              rating={5}
            />
            <Product
              id="2"
              title="제품2"
              price={"10,000"}
              image="/img/doodle mat - image 05 - 2.jpg"
              rating={2}
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="제품3"
              price={"10,000"}
              image="/img/doodle mat - image 06 - 2.jpg"
              rating={3}
            />
            <Product
              id="4"
              title="제품4"
              price={"10,000"}
              image="/img/doodle mat - image 07 - 2.jpg"
              rating={4}
            />
            <Product
              id="5"
              title="제품5"
              price={"10,000"}
              image="/img/doodle mat - image 06 - 2.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="제품6"
              price={"10,000"}
              image="/img/doodle mat - image 05 - 2.jpg"
              rating={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
