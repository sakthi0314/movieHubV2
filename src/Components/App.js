import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Login from "../pages/Login/Login";
import Navbar from "./Navbar/Navbar";
import Signup from "../pages/Signup/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/sign_up" component={Signup} />
        <Route path="/forgetpassword" component={ForgetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
