import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "../redux/actions/employeesActions";

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        name: "",
        address: "",
        position: "",
        salary: ""
      },
      eet: false
    };
  }
  componentDidMount = () => {
    this.props.fetchEmployeeData();
  };

  handleFormChange = e => {
    let employee = { ...this.state.employee };
    employee[e.target.name] = e.target.value;
    this.setState({ employee });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { employee, eet } = this.state;
    const { _id, name, address, position, salary } = employee;
    if (eet) {
      let employee = { _id, name, address, position, salary };
      return this.props.updateEmployeeData(employee);
    }
    return this.props.addEmployeeData(employee);
  };

  handleEditEmployee = employee => {
    this.setState({ employee, eet: true });
  };

  handleDeleteEmployee = id => {
    return this.props.deleteEmployeeData(id);
  };

  render() {
    let { eet, employee } = this.state;
    return (
      <>
        <div className="row mt-5">
          <div className="col-8 text-left">
            <h1>Employees List</h1>
          </div>
        </div>
        <br />

        <div className="card border-dark">
          <div className="card-header">
            {!eet ? "Add New Employee" : "Edit Employee"}
          </div>
          <div className="card-body">
            <form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-3 col-md-offset-1">
                  <label>Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={employee.name}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Address</label>
                  <input
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={employee.address}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Position</label>
                  <input
                    className="form-control"
                    placeholder="Enter Position"
                    name="position"
                    value={employee.position}
                  />
                </div>
                <div className="form-group col-md-2">
                  <label>Salary</label>
                  <input
                    className="form-control"
                    placeholder="Enter Salary"
                    name="salary"
                    value={employee.salary}
                  />
                </div>
                <div className="form-group col-md-1">
                  <button
                    className="btn btn-success form-control float-right"
                    style={{ width: "100%", marginTop: "30px" }}
                  >
                    {!eet ? "Save" : "Update"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <br />
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((emp, idx) => {
              return (
                <tr key={emp._id}>
                  <td>{idx + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.address}</td>
                  <td>{emp.position}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.handleEditEmployee(emp)}
                    >
                      Edit
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDeleteEmployee(emp._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  fetchEmployeeData: () => {
    dispatch(fetchEmployees());
  },
  addEmployeeData: employee => {
    dispatch(addEmployee(employee));
  },
  updateEmployeeData: employee => {
    dispatch(updateEmployee(employee));
  },
  deleteEmployeeData: id => {
    dispatch(deleteEmployee(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
