import React from "react";
import { tableData } from "./data";
import EmployeeTable from "./EmployeeTable";
export default class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: tableData,
      selectedVal: ""
    };
  }
  fetchTable = () => {
    fetch("http://localhost:8089/emp/getAllEmps")
      .then(response => response.json())
      .then(data => {
        // this.state.tableData.rows.push(data);
        //  const
        //  this.setState({this.state.tableData['rows'] : data})
        const { tableData } = this.state;
        tableData["rows"] = data;
        // console.log("new table data", this.state.tableData);
        this.setState({ tableData });
      });
  };
  handleSelected = event => {
    this.fetchTable();
    this.setState({ selectedVal: event.target.value });
    // if (this.state.selectedVal !== "") {
    //   this.fetchTable();
    // }
  };
  render() {
    return (
      <div className="container">
        <h3>Employee Table</h3>
        <div>
          <select
            name="cars"
            value={this.state.selectedVal}
            onChange={this.handleSelected}
            style={{ width: "200px", height: "40px" }}
          >
            <option value="Select">Select</option>
            <option value="Employee">Employee</option>
            <option value="country">Country</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        {/* <EmployeeTable tableData={this.state.tableData} /> */}
      </div>
    );
  }
}
