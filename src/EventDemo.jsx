import React from "react";
let i = 1;
class EventDemo extends React.Component {
  display() {
    const a = 10;
    console.log("inside display method..." + i, a);
    alert("Hello");
    i++;
  }
  render() {
    return (
      <div className="event" style={{ margin: "50px" }}>
        <h1>Event handling exampe</h1>
        <button onClick={this.display}>Greeting</button>
      </div>
    );
  }
}
export default EventDemo;
