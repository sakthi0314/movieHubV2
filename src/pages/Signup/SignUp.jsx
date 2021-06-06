import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import classes from "../Login/Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../store/actions/authAction";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations/Animation";

const Signup = () => {
  const [isHide, setIshide] = useState(true);
  const [confirmIsHide, setConfirmHide] = useState(true);
  const [error, setError] = useState(null);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confrimPassword = useRef();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.firebase);
  const { authError } = useSelector((state) => state.auth);

  // hide password
  const handleHidePassword = () => {
    setIshide(!isHide);
  };

  // hide confirm password
  const confirmPasswordHideHandler = () => {
    setConfirmHide(!confirmIsHide);
  };

  // SignUp functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confrimPassword.current.value) {
      setError("Password did not match");
    }

    const creds = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(signupAction(creds));
  };

  useEffect(() => {
    document.title = "Moviehub - Signup";
  }, []);

  // Redirecting...
  if (auth.uid) {
    return <Redirect to="/" />;
  }

  if (auth.uid) {
    return <Redirect to="/sign_up" />;
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      className={classes.login}
    >
      <div className={classes["login__container"]}>
        <form className={classes["login__form"]} onSubmit={handleSubmit}>
          <div className={classes["login__title"]}>
            <h1>Create New Account</h1>
          </div>

          <div className={classes["login__input"]}>
            <input type="text" placeholder="User name" ref={userNameRef} />
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

          <div className={classes["login__input"]}>
            <input
              type={confirmIsHide ? "password" : "text"}
              placeholder="confirm password"
              ref={confrimPassword}
            />
            <span onClick={confirmPasswordHideHandler}>
              {confirmIsHide ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
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
            <p>{error}</p>
            <p>{authError}</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
