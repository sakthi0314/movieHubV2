import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import classes from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/authAction";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations/Animation";
import Loader from "react-spinners/PulseLoader";

const Login = () => {
  const [isHide, setIshide] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const { authError } = useSelector((state) => state.auth);
  const { auth } = useSelector((state) => state.firebase);
  const [loading, setLoading] = useState(false);

  console.log(authError);

  // hide password
  const handleHidePassword = () => {
    setIshide(!isHide);
  };

  // Login Funcationilty
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);

    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(loginAction(creds));
    setLoading(true);

    // Cheaking wether is Error occur's Loading will stop
    if (authError !== null) {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Moviehub - Login";
  }, []);

  // Redirecting...
  if (auth.uid) {
    return <Redirect to="/" />;
  }

  if (auth.uid) {
    return <Redirect to="/login" />;
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

          <div
            className={classes["login__button"]}
            style={{ opacity: loading && ".6" }}
          >
            <button>
              {loading ? (
                <Loader
                  color="rgb(18, 18, 18);"
                  size={10}
                  margin={2}
                  loading={true}
                />
              ) : (
                "Login"
              )}
            </button>
          </div>

          <div className={classes["login__message"]}>
            <p>{authError}</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
