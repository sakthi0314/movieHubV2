import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pageVariant } from "../../animations/Animation";
import { forgetPasswordAction } from "../../store/actions/authAction";
import classes from "../Login/Login.module.scss";

const ForgetPassword = () => {
  const emailRef = useRef();
  const dispatch = useDispatch();
  const { authError } = useSelector((state) => state.auth);
  const [succesMsg, setSuccessMsg] = useState(null);

  // Forget password functinality
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgetPasswordAction(emailRef.current.value));
    setSuccessMsg("Cheak your email to reset your Pasword");
  };

  useEffect(() => {
    emailRef.current.focus();
    document.title = "Moviehub - Forget password";
  }, []);

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
            <p>{authError}</p>
            <p>{succesMsg}</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgetPassword;
