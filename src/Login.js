import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message()));
  };

  const register = (e) => {
    e.preventDefault(); //preventDefault로 새로고침 막아줌
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message()));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/img/png01.png" alt="" />
      </Link>

      <div className="login_container">
        <h1> 로그인 </h1>

        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={signIn} className="login_button">
            로그인 하기
          </button>
        </form>

        <p>이용 약관에 동의하십니까?</p>

        <button onClick={register} className="login_register">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
