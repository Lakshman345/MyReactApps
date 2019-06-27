import React from "react";
import FixedDepositForm from "../../navroutes/deposit/FixedDepositForm";
import RecuuringDepositForm from "./RecuuringDepositForm";

class DepositForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fd: "",
      rd: "",
      isSelected: "false"
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
  };

  render() {
    const { fd, rd, isSelected } = this.state;
    return (
      <div style={{ margin: "30px" }}>
        <input
          type="radio"
          value={fd}
          name="FD"
          checked={isSelected}
          onClick={this.handleClick}
        />{" "}
        <b>FD</b>
        <input
          type="radio"
          value={rd}
          name="RD"
          checked={!isSelected}
          onClick={this.handleClick}
        />{" "}
        <b>RD</b>
        {isSelected ? <FixedDepositForm /> : <RecuuringDepositForm />}
      </div>
    );
  }
}

export default DepositForm;
