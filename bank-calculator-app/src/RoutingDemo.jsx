import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomeComp from "./routing/HomeComp";
import AboutUSComp from "./routing/AboutUSComp";
import ServiceComp from "./routing/ServiceComp";
import ContactUSComp from "./routing/ContactUSComp";

export default class RoutingDemo extends React.Component {
  render() {
    return (
      <Router>
        <div className="router" style={{ marginLeft: "50px" }}>
          <h1>Welcome to CTS</h1>
          <div
            className="links"
            style={{
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "green",
              fontSize: "1.25rem"
            }}
          >
            <div className="nav" style={{ color: "white" }}>
              <Link to="/">Home</Link> |<Link to="/about">About US</Link> |
              <Link to="/services">Services</Link> |
              <Link to="/contact">Contact </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomeComp} />
            <Route exact path="/about" component={AboutUSComp} />
            <Route exact path="/services" component={ServiceComp} />
            <Route exact path="/contact" component={ContactUSComp} />
          </Switch>
        </div>
      </Router>
    );
  }
}
