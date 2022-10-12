import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

//create the context object
// const EmployeesContext = React.createContext();

//export hook to be accessed by components
// export function useEmployees() {
//   return useContext(EmployeesContext);
// };

// custom hook to handle all the functionality
export const useEmployees = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => { //get employee array and set employees
    axios.get('/employees')
         .then((res) => {
          setEmployees(res.data)
         })
  }, [])

  function addEmployee({name, code, profession, color, city, branch, assigned})  { //add an employee
    axios.post('/employees', {name, code, profession, color, city, branch, assigned})
         .then(res => console.log(res))
  };

  function deleteEmployee({ id }) {
    axios.delete(`/employees/delete/${id}`)
         .then(res => {
          console.log(res)
         })
         setEmployees(prevEmployees => {
          return prevEmployees.filter(employee => employee.id !== id)
         })
  }

  // return (
  //   <EmployeesContext.Provider value={{
  //     employees, 
  //     addEmployee
  //   }}>{children}</EmployeesContext.Provider>
  // )

  return { employees, addEmployee, deleteEmployee }
};
