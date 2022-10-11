import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Stack, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function App() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get('/employees')
         .then((res) => {
          setEmployees(res.data)
         })
  }, [])
  
  const oneEmployee = employees.map(employee => {
    let assigned = ""
    if(employee.assigned) {
     assigned = "true"
    }
    else { 
      assigned = "false"
    }
    return (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.code}</td>
        <td>{employee.profession}</td>
        <td>{employee.city}</td>
        <td>{employee.branch}</td>
        <td>{assigned}</td>
        <td className="d-flex justify-content-between">
          <Button className="btn btn-danger btn-sm">Delete</Button>
          <Button className="btn btn-secondary btn-sm">Edit</Button>
        </td>
      </tr>
    )
  })

  return (
    <div className="vh-100" style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <Container >
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto mt-5">Plexxis Employees</h1>
          <Button>Add Employee</Button>
        </Stack>
        <Stack>
          <Table bordered hover striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Profession</th>
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
        </Stack>
      </Container>
    </div>
  );
}

export default App;
