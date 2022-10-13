import { Table } from 'react-bootstrap'
import { useEmployees } from '../contexts/EmployeesContext'
import { Employee } from './Employee'

export const EmployeeTable = () => {


  const { employees } = useEmployees();

  //create an Employee component by looping through the employee array

  const oneEmployee = employees.map(employee => {

    //convert boolean from data, to string to be displayed in table
    let assigned = ""
    if(employee.assigned) {
      assigned = "True"
    } else { 
      assigned = "False"
    }

    return (
      <Employee
        key={employee.id}
        id={employee.id}
        name={employee.name} 
        code={employee.code}
        profession={employee.profession}
        color={employee.color}
        city={employee.city}
        branch={employee.branch}
        assigned={assigned}
      />
    )
  })
  
  return (
    <Table bordered hover striped>
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Profession</th>
        <th>Color</th>
        <th>City</th>
        <th>Branch</th>
        <th>Assigned</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {oneEmployee}
    </tbody>
  </Table>
  )
}
