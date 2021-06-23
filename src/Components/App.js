import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Login from "../pages/Login/Login";
import Navbar from "./Navbar/Navbar";
import Signup from "../pages/Signup/SignUp";
import Footer from "../Components/Footer/Footer";
import Details from "../pages/Details/Details";

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
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/:id" component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
