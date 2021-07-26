import React, { useEffect } from "react";
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
import MoviePage from "../pages/MoviePage/MoviePage";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme/theme";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import SeriesPage from "../pages/SeriesPage/SeriesPage";
import PersonPage from "../pages/PersonPage/PersonPage";

function App() {
  // App First Render
  useEffect(() => {
    console.log("App Running");
  }, []);

  return (
    <LazyLoadComponent>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/sign_up" component={Signup} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route path="/movies" component={MoviePage} />
            <Route path="/series" component={SeriesPage} />
            <Route path="/people" component={PersonPage} />
            <Route path="/person/:id" component={Person} />
            <Route path="/cast/:media_type/:id" component={CastAndCrew} />
            <Route path="/:media_type/:id" component={Details} />
            <Route path="/search" component={SearchResults} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </LazyLoadComponent>
  );
}

export default App;
