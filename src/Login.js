import React from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/img/png01.png" alt="" />
      </Link>

      <div className="login_container">
        <h1> 로그인 </h1>

        <form>
          <h5>email</h5>
          <input type="text" />
          <h5>password</h5>
          <input type="password" />

          <button className="login_button"> 로그인 하기 </button>
        </form>

        <p>이용 약관에 동의하십니까?</p>

        <button className="login_register">회원가입</button>
      </div>
    </div>
  );
}

export default Login;
