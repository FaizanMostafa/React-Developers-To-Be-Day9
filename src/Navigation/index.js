import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../Pages/Home";
import Services from "../Pages/Services";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/services">Services</Link>&nbsp;&nbsp;
        <Link to="/about-us">About Us</Link>&nbsp;&nbsp;
        <Link to="/contact-us">Contact Us</Link>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default Navigation;