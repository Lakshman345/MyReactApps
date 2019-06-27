import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      count: 0,
      count1: 50
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count1: this.state.count1 - 1
    });
  };
  componentWillMount() {
    console.log("componentWillMount called");
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate called", nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called", prevState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("render called");
    return (
      <div className="inc" style={{ margin: "50px" }}>
        <h1>
          You clicked {this.state.count} -- {this.state.count1} many times
        </h1>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    );
  }
}
export default Counter;
