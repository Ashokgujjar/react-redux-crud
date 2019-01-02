import axios from "axios";

//Get Employees------------------------------------------------------
export const fetchEmployees = () => dispatch => {
  axios
    .get("http://localhost:8000/employeeapi/employees")
    .then(response => {
      dispatch(fetchEmployeesSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export function fetchEmployeesSuccess(employees) {
  return { type: "FETCH_EMPOLYEES_SUCCESS", payload: employees };
}

//Add new Employee------------------------------------------------------
export const addEmployee = employee => dispatch => {
  axios
    .post("http://localhost:8000/employeeapi/employee", employee)
    .then(response => {
      dispatch(addEmployeeSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export function addEmployeeSuccess(response) {
  return { type: "ADD_EMPOLYEE_SUCCESS", payload: response };
}

//Update Employee------------------------------------------------------
export const updateEmployee = employee => dispatch => {
  axios
    .put("http://localhost:8000/employeeapi/employee/" + employee._id, employee)
    .then(response => {
      dispatch(updateEmployeeSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export function updateEmployeeSuccess(response) {
  return { type: "UPDATE_EMPOLYEE_SUCCESS", payload: response };
}

//Delete Employee------------------------------------------------------
export const deleteEmployee = id => dispatch => {
  axios
    .delete("http://localhost:8000/employeeapi/employee/" + id)
    .then(response => {
      dispatch(deleteEmployeeSuccess(response.data, dispatch));
    })
    .catch(error => {
      console.log(error);
    });
};

export function deleteEmployeeSuccess(response, dispatch) {
  dispatch(fetchEmployees());
}
