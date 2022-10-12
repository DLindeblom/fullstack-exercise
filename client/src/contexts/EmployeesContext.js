import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

// create the context object
const EmployeesContext = React.createContext();

//export hook to be accessed by components
export function useEmployees() {
  return useContext(EmployeesContext);
};

// custom hook to handle all the functionality
export const EmployeesProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => { //get employee array and set employees
    axios.get('/employees')
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);

  function addEmployee({ name, code, profession, color, city, branch, assigned }) { //add an employee
    axios.post('/employees', { name, code, profession, color, city, branch, assigned })
      .then(res => console.log(res))
      .then(() => {
        setEmployees(prevEmployees => {
          return [...prevEmployees, { name, code, profession, color, city, branch, assigned }]
        })
      });
  };

  //the issue with this method of updating state after adding and employee is that I don't have the ID of the user from the database so if the get request isnt made, I cant delete or edit this information until the ID eventually comes from the database.  I could make a get request inside of my .then() and reset the employee state but the could be expensive if employee table is large!

  function deleteEmployee(id) { //delete an employee
    axios.delete(`/employees/delete/${id}`)
      .then(() => {
        setEmployees(prevEmployees => {
          return prevEmployees.filter(employee => employee.id !== id)
        })
      });
  }

  function updateEmployee({ id, name, code, profession, color, city, branch, assigned }) {
    console.log(color)
    axios.put(`/employees/update/${id}`, {id, name, code, profession, color, city, branch, assigned})
    .then((res) => {
      if(res.status === 200) {
        axios.get('/employees')
        .then((res) => {
          console.log(res.data)
          setEmployees(res.data);
        });
        // setEmployees(prevEmployees => {
        //   return [...prevEmployees, { id, name, code, profession, color, city, branch, assigned }]
        // })
      }
    })
  }

  return (
    <EmployeesContext.Provider value={{
      employees, 
      addEmployee,
      deleteEmployee,
      updateEmployee
    }}>{children}</EmployeesContext.Provider>
  )

  // return { employees, addEmployee, deleteEmployee };
};
