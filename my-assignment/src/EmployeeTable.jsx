import React from "react";
import { tableData } from "./data";
import { filter } from "lodash";
import Pagination from "./Pagination";
//import Pagination from "react-paginate";

export default class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterVal: "",
      tableData: tableData,
      filteredData: [],
      selectedVal: "",
      activePage: 1,
      itemsCountPerPage: 3,
      pageRangeDisplayed: 8,
      reportCollection: []
    };
  }

  onSort = (event, sortKey) => {
    this.state.tableData.rows.sort((a, b) =>
      a[sortKey].localeCompare(b[sortKey])
    );
    console.log("sortKey", sortKey);

    // console.log("tabledata***", tableData);
    this.setState({ tableData: tableData });
  };

  filterList = (event, key) => {
    console.log("inside function");

    this.setState({ filterVal: event.target.value });

    const filteredData = filter(
      this.state.tableData.rows,
      obj =>
        obj.firstName.toLowerCase() === event.target.value.toLowerCase() ||
        obj.lastName.toLowerCase() === event.target.value.toLowerCase() ||
        obj.id.toLowerCase() === event.target.value.toLowerCase() ||
        obj.age.toLowerCase() === event.target.value.toLowerCase() ||
        obj.contact.toLowerCase() === event.target.value.toLowerCase()
    );
    console.log("filteredDataaa***", filteredData);
    if (filteredData.length > 0) this.setState({ filteredData });
    else this.setState({ filteredData: [] });
  };

  clear = () => {
    this.setState({ filterVal: "", filteredData: [] });
  };

  fetchTable = () => {
    fetch("http://localhost:8089/emp/getAllEmps")
      .then(response => response.json())
      .then(data => {
        const { tableData } = this.state;
        tableData["rows"] = data;
        console.log("new table data", this.state.tableData);
        this.setState({ tableData });
      });
  };

  handleSelected = event => {
    this.fetchTable();
    this.setState({ selectedVal: event.target.value });
  };

  handlePageChange = pageNumber => {
    const itemCollectionClone = [...this.state.tableData.rows];
    this.updateSearchConfig(itemCollectionClone, pageNumber);
  };
  updateSearchConfig = (itemCollectionClone, pageNumber) => {
    const pageNo = parseInt(pageNumber, 10);
    const size = this.state.itemsCountPerPage;
    const skip = size * (pageNo - 1);
    const limit = size;
    const paginatedItemCollections = itemCollectionClone.splice(skip, limit);
    this.setState({
      activePage: pageNumber, // updating value
      reportCollection: paginatedItemCollections
    });
  };

  render() {
    console.log("tableData**", this.state.tableData);
    let { filteredData } = this.state;
    if (filteredData.length === 0) {
      filteredData = this.state.tableData.rows;
    }
    // const tableDataPerPage =
    //   this.state.filteredData.rows.length > this.state.itemsCountPerPage
    //     ? this.state.filteredData.rows.slice(0, this.state.itemsCountPerPage)
    //     : this.state.filteredData.rows;

    console.log("filteredData", filteredData);
    const emptable = this.state.selectedVal === "Employee" &&
      this.state.tableData.rows.length > 0 && (
        <div>
          {" "}
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search by Id, First Name, Last Name, Age or Contact "
              value={this.state.filterVal}
              onChange={this.filterList}
              onKeyDown={this.onKeyDown}
              style={{ margin: "15px" }}
            />
            <button
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={this.clear}
              style={{ height: "50px", marginTop: "12px" }}
            >
              clear
            </button>
          </div>
          <div id="table" className="table-responsive">
            <table className="table table-hover ">
              <thead>
                <tr>
                  {this.state.tableData.columns.map(column => (
                    <th
                      scope="col"
                      // data-sortable="true"
                      data-sort={column.value}
                      onClick={e => this.onSort(e, column.value)}
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map(row => (
                  <tr>
                    <th scope="row">{row.id}</th>
                    <td className="firstName">{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.age}</td>
                    <td>{row.contact}</td>
                    <td>
                      <a
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        href="http://localhost:3001/"
                      >
                        <i className="material-icons">&#xE254;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <Pagination /> */}
          <Pagination
            pageCount={this.state.tableData.rows.length}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            initialPage={this.state.activePage}
            onPageChange={this.handleOnPageChange}
          />
        </div>
      );
    const noTableData = (
      <div
        style={{
          margin: "10px",
          fontSize: "1.25rem",
          color: "red",
          border: "1px solid black ",
          padding: "10px"
        }}
      >
        No Data Found!!!
      </div>
    );
    return (
      <div className="container-fluid ">
        <div
          style={{
            padding: "10px",

            borderBottom: "1px solid grey",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "whitesmoke"
          }}
        >
          <span
            style={{ padding: "5px", fontSize: "1.25rem", fontWeight: "500" }}
          >
            Select Table
          </span>
          <select
            name="cars"
            value={this.state.selectedVal}
            onChange={this.handleSelected}
            style={{ width: "200px", height: "40px" }}
          >
            <option value="Select">Select</option>
            <option value="Employee">Employee</option>
            <option value="country">Country</option>
            <option value="fiat">Plans</option>
          </select>
        </div>

        {/* {emptable} */}

        {this.state.selectedVal === "Employee" &&
        this.state.tableData.rows.length === 0
          ? noTableData
          : emptable}

        {/*<div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search by Id, First Name, Last Name, Age or Contact "
              value={this.state.filterVal}
              onChange={this.filterList}
              onKeyDown={this.onKeyDown}
              style={{ margin: "15px" }}
            />
            <button
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={this.clear}
              style={{ height: "50px", marginTop: "12px" }}
            >
              clear
            </button>
          </div>
          <div id="table" className="table-responsive">
            <table className="table table-hover ">
              <thead>
                <tr>
                  {this.state.tableData.columns.map(column => (
                    <th
                      scope="col"
                      // data-sortable="true"
                      data-sort={column.value}
                      onClick={e => this.onSort(e, column.value)}
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map(row => (
                  <tr>
                    <th scope="row">{row.id}</th>
                    <td className="firstName">{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.age}</td>
                    <td>{row.contact}</td>
                    <td>
                      <a
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        href="http://localhost:3001/"
                      >
                        <i className="material-icons">&#xE254;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div> */}
      </div>
    );
  }
}
