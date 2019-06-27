import React from "react";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      val1: "",
      val2: "",
      result: ""
    };
  }
  handleVal1 = event => {
    this.setState({
      val1: Number(event.target.value)
    });
  };
  handleVal2 = event => {
    this.setState({
      val2: Number(event.target.value)
    });
  };
  addNumbers = () => {
    this.setState({
      result: this.state.val1 + this.state.val2
    });
  };
  subNumbers = () => {
    this.setState({
      result: this.state.val1 - this.state.val2
    });
  };
  mulNumbers = () => {
    this.setState({
      result: this.state.val1 * this.state.val2
    });
  };
  divNumbers = () => {
    this.setState({
      result: this.state.val1 / this.state.val2
    });
  };

  reset = () => {
    this.setState({
      val1: "",
      val2: "",
      result: ""
    });
  };
  render() {
    const { result } = this.state;

    return (
      <div
        className="cal"
        style={{
          margin: "50px",
          padding: "10px ",
          border: "2px solid black",
          backgroundColor: "blue",
          color: "white"
        }}
      >
        <h1>Calculator</h1>
        <h3>Please eneter values</h3>
        <label>
          <b>Num1:</b>{" "}
          <input
            type="text"
            value={this.state.val1}
            onChange={this.handleVal1}
          />
        </label>
        <br />
        <br />

        <label>
          <b>Num2:</b>{" "}
          <input
            type="text"
            value={this.state.val2}
            onChange={this.handleVal2}
          />
        </label>

        <h3>Result is: {result}</h3>
        <div className="btn" style={{ padding: "5px" }}>
          <button onClick={this.addNumbers} style={{ margin: "5px" }}>
            Add
          </button>
          <button onClick={this.subNumbers} style={{ margin: "5px" }}>
            Sub
          </button>
          <button onClick={this.mulNumbers} style={{ margin: "5px" }}>
            Mul
          </button>
          <button onClick={this.divNumbers} style={{ margin: "5px" }}>
            Div
          </button>
          <button
            onClick={this.reset}
            style={{ margin: "5px", width: "50px", height: "50px" }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
