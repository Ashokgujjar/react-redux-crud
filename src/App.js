import React, { Component } from "react";
import EmployeesList from "./components/EmployeesList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <EmployeesList />
        </div>
      </div>
    );
  }
}

export default App;
