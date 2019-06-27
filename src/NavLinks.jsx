import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import LoginComp from "./navroutes/LoginComp";
import ServicesComp from "./navroutes/ServicesComp";
import ContactsComp from "./navroutes/ContactsComp";

export default class NavLinks extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            margin: "20px",
            width: "auto",
            height: "100%"
          }}
        >
          <div
            style={{
              margin: "20px",
              border: "2px solid black",
              padding: "20px",
              backgroundColor: "grey",
              fontSize: "1.5rem"
            }}
          >
            <Link
              to="/login"
              style={{
                padding: "20px",
                color: "white"
              }}
            >
              Login
            </Link>
            <Link
              to="/services"
              style={{
                padding: "20px",
                color: "white"
              }}
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={{
                padding: "20px",
                color: "white"
              }}
            >
              Contact US
            </Link>
          </div>
          <Switch>
            <Route exact path="/login" component={LoginComp} />
            <Route exact path="/services" component={ServicesComp} />
            <Route exact path="/contact" component={ContactsComp} />
          </Switch>
        </div>
      </Router>
    );
  }
}
