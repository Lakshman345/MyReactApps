import React from "react";
import ReactDOM from "react-dom";

export default class FormsComp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
    this.myText = React.createRef();
  }
  updateData = event => {
    this.setState({
      data: event.target.value
    });
  };
  clearData = () => {
    this.setState({
      data: ""
    });
    ReactDOM.findDOMNode(this.myText.current.focus());
    //ReactDOM.findDOMNode(this.refs.myText).focus();
  };
  render() {
    return (
      <div className="forms" style={{ margin: "50px" }}>
        <hr />
        <h1>Forms</h1>
        <h2>
          Enter name:{" "}
          {/* <input
            type="text"
            value={this.state.data}
            onChange={this.updateData}
            required
          /> */}
          <input
            type="text"
            ref={this.myText}
            onChange={this.updateData}
            required
          />
          <button onClick={this.clearData}>Reset</button>
        </h2>
        <h2>welcome {this.state.data}!!</h2>
      </div>
    );
  }
}
