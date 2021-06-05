import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import classes from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/authAction";

const Login = () => {
  const [isHide, setIshide] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const { authError } = useSelector((state) => state.auth);
  const { auth } = useSelector((state) => state.firebase);

  // hide password
  const handleHidePassword = () => {
    setIshide(!isHide);
  };

  // Login Funcationilty
  const handleSubmit = (e) => {
    e.preventDefault();

    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(loginAction(creds));
  };

  useEffect(() => {
    document.title = "Moviehub - Login";
  }, []);

  // Redirecting...
  if (auth.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.login}>
      <div className={classes["login__container"]}>
        <form className={classes["login__form"]} onSubmit={handleSubmit}>
          <div className={classes["login__title"]}>
            <h1>Login user</h1>
          </div>
          <div className={classes["login__input"]}>
            <input type="text" placeholder="Enter your email" ref={emailRef} />
          </div>

          <div className={classes["login__input"]}>
            <input
              type={isHide ? "password" : "text"}
              placeholder="password"
              ref={passwordRef}
            />
            <span onClick={handleHidePassword}>
              {isHide ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className={classes["login__bottom"]}>
            <Link className={classes["login__link"]} to="/forgetpassword">
              Forget Password ?
            </Link>
            <Link className={classes["login__link"]} to="/sign_up">
              Create an account
            </Link>
          </div>

          <div className={classes["login__button"]}>
            <button>Login</button>
          </div>

          <div className={classes["login__message"]}>
            <p>{authError}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
