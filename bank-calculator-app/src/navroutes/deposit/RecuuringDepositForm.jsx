import React from "react";

class RecuuringDepositForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Loan: "",
      duration: "",
      roi: "",
      emi: ""
    };
  }

  handlePrincipleAmt = event => {
    this.setState({
      principleAmt: event.target.value
    });
  };
  handleDuration = event => {
    this.setState({
      duration: event.target.value
    });
  };
  handleROI = event => {
    this.setState({
      roi: event.target.value
    });
  };
  displayMaturity = () => {
    this.setState({
      MaturityAmt:
        (this.state.principleAmt * this.state.duration * this.state.roi) / 100
    });
  };

  render() {
    return (
      <div className="rdf" style={{ display: "block" }}>
        <h1>Recurring Deposit Form</h1>
        <label>
          <b>Loan:</b>
          <input
            type="text"
            value={this.state.principleAmt}
            name="pamt"
            onChange={this.handlePrincipleAmt}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <label>
          <b>Duration:</b>:
          <input
            type="number"
            value={this.state.duration}
            name="duration"
            onChange={this.handleDuration}
            style={{ display: "block" }}
          />
          <br />
          <br />
        </label>
        <label>
          <b> ROI:</b>
          <input
            type="number"
            value={this.state.roi}
            onChange={this.handleROI}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <label>
          <span>EMI:</span>
          {this.state.calEMI}
        </label>
        <br />
        <button onClick={this.displayMaturity}>Calculate</button>
      </div>
    );
  }
}
export default RecuuringDepositForm;
