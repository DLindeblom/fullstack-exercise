import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

// create the context object
const EmployeesContext = React.createContext();

//export hook to be accessed by components
export function useEmployees() {
  return useContext(EmployeesContext);
};

// Provider component
export const EmployeesProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);
  const [variant, setVariant] = useState("");
  const [alertText, setAlertText] = useState("");


  useEffect(() => { //get employee array and set employees
    axios.get('/employees')
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);

  function addEmployee({ name, code, profession, color, city, branch, assigned }) { //add an employee
    axios.post('/employees', { name, code, profession, color, city, branch, assigned })
      .then((res) => {
        console.log("response", res.status)
        if(res.status === 200) {
          setVariant("success")
          setAlertText("Employee successfully added!")
          axios.get('/employees')
            .then((res) => {
              setEmployees(res.data)
            })
        } 
      })
      .catch(() => {
        setVariant("danger")
        setAlertText("Oops, something went wrong!")
      })
  };

  //the issue with this method of updating state after adding and employee is that I don't have the ID of the user from the database so if the get request isnt made, I cant delete or edit this information until the ID eventually comes from the database.  I could make a get request inside of my .then() and reset the employee state but the could be expensive if employee table is large!

  function deleteEmployee(id) { //delete an employee
    axios.delete(`/employees/delete/${id}`)
      .then((res) => {
        console.log(res.status)
        if (res.status === 200 ) {
          setVariant("success")
          setAlertText("Employee Successfully Deleted")
          //filter out the employee from the employees array whos id matches the id of the employee being deleted from the database
          setEmployees(prevEmployees => {
            return prevEmployees.filter(employee => employee.id !== id);
          });
        }
      })
      .catch(() => {
        setVariant("danger")
        setAlertText("Oops, Something went wrong!")
      })
  }

  function updateEmployee({ id, name, code, profession, color, city, branch, assigned }) {
    axios.put(`/employees/update/${id}`, { id, name, code, profession, color, city, branch, assigned })
      .then((res) => {
        console.log(res.status)
        if (res.status === 200) {
          setVariant("success")
          setAlertText("Employee Successfully Updated!")
          // filter out the existing entry with the old data, and spread the rest of the array and add the edited employee information to the employee array
          setEmployees(prevEmployees => {
            return [...prevEmployees.filter(employee => employee.id !== id), { id, name, code, profession, color, city, branch, assigned }];
          });
        } 
      })
      .catch(() => {
        setVariant("danger")
        setAlertText("Oops, Something went wrong!")
      })
  }

  //unintended side effect of this approach is the employee being edited is now placed at the end of the array.  Not sure if refetching the data to all the employee to remain in the same location on the table would be better?
  

  return (
    <EmployeesContext.Provider value={{
      employees,
      variant,
      alertText,
      setAlertText,
      addEmployee,
      deleteEmployee,
      updateEmployee
    }}>{children}</EmployeesContext.Provider>
  );

};
