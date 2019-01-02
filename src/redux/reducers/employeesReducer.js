import initialState from "../initialState";

const { employees } = initialState;

export default function(oldState = employees, action) {
  switch (action.type) {
    case "FETCH_EMPOLYEES_SUCCESS":
      return action.payload;
    case "ADD_EMPOLYEE_SUCCESS":
      return oldState.concat(action.payload);
    case "UPDATE_EMPOLYEE_SUCCESS":
      const updatedEmployees = oldState.map(employee => {
        if (employee._id === action.payload._id) {
          return { ...employee, ...action.payload };
        }
        return employee;
      });
      return updatedEmployees;
    case "DELETE_EMPOLYEE_SUCCESS":
      return oldState;
    default:
      return oldState;
  }
}
