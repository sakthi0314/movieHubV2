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
import CastAndCrew from "../pages/CastAndCrew/CastAndCrew";
import SearchResults from "../pages/SearchResults/SearchResults";
import Person from "../pages/Person/Person";

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
        <Route path="/person/:id" component={Person} />
        <Route path="/cast/:media_type/:id" component={CastAndCrew} />
        <Route path="/:media_type/:id" component={Details} />
        <Route path="/search" component={SearchResults} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
