import React from "react";
import PropTypes from "prop-types";

class Person extends React.Component {
  render() {
    return (
      <div className="person" style={{ margin: "50px" }}>
        <h1>Person Details:</h1>

        <h3>Name: {this.props.name}</h3>
        <h3>Age: {this.props.age}</h3>
        <h3>Martial Status: {this.props.married ? "YES" : "NO"}</h3>
        <h3>Address: {this.props.address}</h3>
        <h3>Annual Package: {this.props.salary(21000)}</h3>
      </div>
    );
  }
}

Person.defaultProps = {
  name: "Lak",
  age: 25,
  married: false,
  address: ["Bangalore", "Pune"],
  salary: function(s) {
    return s * 12;
  }
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  married: PropTypes.bool.isRequired,
  address: PropTypes.array,
  salary: PropTypes.func
};
export default Person;
