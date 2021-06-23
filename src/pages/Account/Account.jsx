import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logoutAction } from "../../store/actions/authAction";
import classes from "./Account.module.scss";
import avatar from "../../assets/avatar.png";

const Account = () => {
  const dispatch = useDispatch();

  const { auth, profile } = useSelector((state) => state.firebase);

  console.log(profile);

  const handleSubmit = () => {
    dispatch(logoutAction());
    return <Redirect to="/login" />;
  };

  useEffect(() => {
    document.title = "Moviehub - Account";
  }, []);

  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.account}>
      <div className={classes["account__container"]}>
        <div className={classes["account__profile"]}>
          <img src={avatar} alt="Profile" />
        </div>
        <h1>{profile.userName}</h1>
        <button className={classes["account__button"]} onClick={handleSubmit}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
