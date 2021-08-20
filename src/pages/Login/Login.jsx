import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import classes from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/authAction";

const Login = () => {
  const [isHide, setIshide] = useState(true);
  const [emailValue, setEmailValue] = useState("demoacc@gmail.com");
  const [passwordValue, setPasswordValue] = useState("123456");
  const dispatch = useDispatch();
  const emailRef = useRef();
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
      email: emailValue,
      password: passwordValue,
    };

    dispatch(loginAction(creds));
  };

  useEffect(() => {
    document.title = "Moviehub - Login";
    emailRef.current.focus();
  }, []);

  // Redirecting...
  if (auth.uid) {
    return <Redirect to="/" />;
  }

  if (auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.login}>
      <div className={classes["login__container"]}>
        <form className={classes["login__form"]} onSubmit={handleSubmit}>
          <div className={classes["login__title"]}>
            <h1>Login user</h1>
          </div>
          <div className={classes["login__input"]}>
            <input
              type="text"
              placeholder="Enter your email"
              ref={emailRef}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>

          <div className={classes["login__input"]}>
            <input
              type={isHide ? "password" : "text"}
              placeholder="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
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
            <p className="error">{authError}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
