import React from "react";

export default class DepositForm extends React.Component {
  constructor() {
    super();
    this.state = {
      principleAmt: ""
    };
  }
  render() {
    return (
      <div>
        <input type="radio" name="fd">
          FD
        </input>
        <input type="radio" name="rd">
          RD
        </input>
      </div>
    );
  }
}
