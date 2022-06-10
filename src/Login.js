import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing in, you agree to Starvana's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads notice.
        </p>

        <button className='login__registerButton'>Create your Starvana Account</button>
      </div>
    </div>
  );
};

export default Login;
