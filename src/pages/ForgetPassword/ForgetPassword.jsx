import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "../Login/Login.module.scss";

const ForgetPassword = () => {
  const emailRef = useRef();

  // Forget password functinality
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    emailRef.current.focus();
    document.title = "Moviehub - Forget password";
  }, []);

  return (
    <div className={classes.login}>
      <div className={classes["login__container"]}>
        <form className={classes["login__form"]} onSubmit={handleSubmit}>
          <div className={classes["login__title"]}>
            <h1>Forget Password</h1>
          </div>
          <div className={classes["login__input"]}>
            <input type="text" placeholder="Enter your email" ref={emailRef} />
          </div>

          <div className={classes["login__bottom"]}>
            <Link className={classes["login__link"]} to="/login">
              Aleardy have an account ? Login
            </Link>
          </div>

          <div className={classes["login__button"]}>
            <button>Login</button>
          </div>

          <div className={classes["login__message"]}>
            {/* <p>{error}</p>
            <h6>{message}</h6> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
