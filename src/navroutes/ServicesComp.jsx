import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DepositForm from "../navroutes/deposit/DepositForm";
import LoanComp from "../navroutes/LoanComp";
import Account from "../navroutes/deposit/Account";

const ServicesComp = ({ match }) => {
  return (
    <Router>
      <div
        style={{
          margin: "20px",
          border: "2px solid black",
          backgroundColor: "grey"
        }}
      >
        <div
          style={{
            margin: "20px",
            color: "white"
          }}
        >
          <ul style={{ listStyleType: "none", fontsize: "0.9rem" }}>
            <li>
              {" "}
              <Link
                to={`${match.url}/deposit`}
                style={{ fontSize: "1.25rem", color: "white" }}
              >
                Deposit
              </Link>
            </li>
            {/* <li>
            {" "}
            <Link to="/services/deposit">Deposit</Link>
          </li> */}
            <li>
              {" "}
              <Link to="/acc" style={{ fontSize: "1.25rem", color: "white" }}>
                Account
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/loan" style={{ fontSize: "1.25rem", color: "white" }}>
                Loan
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={`${match.path}/deposit`} component={DepositForm} />
          <Route exact path="/acc" component={Account} />
          <Route exact path="/loan" component={LoanComp} />

          {/* <Route exact path="/deposit" render={() => <h1>welcome</h1>} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default ServicesComp;
