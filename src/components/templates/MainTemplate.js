import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import cookie from "react-cookies";

import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import Home from "../pages/HomePage";
import TimeLine from "../pages/TimeLinePage";
import Gallery from "../pages/GalleryPage";
import Contact from "../pages/ContactPage";
import NotFound from "../pages/NotFoundPage";

const fakeAuth = {
  isAuthenticated: cookie.load("remember"),
  authenticate(remember, cb) {
    this.isAuthenticated = true;
    if (remember) {
      cookie.save("remember", 1, {
        expires: new Date("May 26, 2018 13:00:00"),
      });
    }
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    cookie.remove("remember");
    setTimeout(cb, 100); // fake async
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <React.Fragment>
        {props.match.path !== "/" ? <Header /> : null}
        <Component {...props} />
        <Footer />
      </React.Fragment>
    )}
  />
);

const MainTemplate = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute exact path="/gallery" component={Gallery} />
    <PrivateRoute exact path="/rsvp" component={Contact} />
    <PrivateRoute exact path="/story" component={TimeLine} />

    <Route
      render={() => (
        <React.Fragment>
          <Header fakeAuth={fakeAuth} />
          <NotFound />
          <Footer fixed />
        </React.Fragment>
      )}
    />
  </Switch>
);

PrivateRoute.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  component: PropTypes.func.isRequired,
};
PrivateRoute.defaultProps = {
  match: {},
  location: {},
};

export default MainTemplate;
