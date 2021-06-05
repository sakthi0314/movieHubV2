import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { logoutAction } from "../../store/actions/authAction";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state.firebase);

  const handleSubmit = () => {
    dispatch(logoutAction());
    history.push("/login");
  };

  useEffect(() => {
    document.title = "Moviehub - Account";
  }, []);

  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "yellowgreen",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hello</h1>
      <button
        style={{ margin: "1rem", padding: "1rem 3rem" }}
        onClick={handleSubmit}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
