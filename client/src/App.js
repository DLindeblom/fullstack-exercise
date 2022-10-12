import { useEffect, useState } from 'react';
import { Container, Stack, Button, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AddEmployeeModal } from './components/AddEmployeeModal';
import { useEmployees } from './hooks/useEmployees'
import { Employee } from './components/Employee';
import { DeleteEmployeeModal } from './components/DeleteEmployeeModal';

function App() {

  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
  const [deleteEmployeeModalId, setDeleteEmployeeModalId] = useState();

  const { employees } = useEmployees();

  const openDeleteEmployeeModal = (id) => {
    setShowDeleteEmployeeModal(true)
    setDeleteEmployeeModalId(id)
  }

  
  const oneEmployee = employees.map(employee => {
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
        onDeleteEmployeeClick={() => openDeleteEmployeeModal(employee.id)}
      />
    )
  })

  // console.log(employees) 

  return (
    <div>
      <Container >
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto mt-5">Plexxis Employees</h1>
          <Button className="mt-5" onClick={() => setShowAddEmployeeModal(true)}>Add Employee</Button>
        </Stack>
        <Stack>
          <Table bordered hover striped>
            <thead>
              <tr>
                <th>ID</th>
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
        </Stack>
      </Container>

      <AddEmployeeModal
        show={showAddEmployeeModal}
        handleClose={() => setShowAddEmployeeModal(false)}
      />

      <DeleteEmployeeModal
        show={showDeleteEmployeeModal}
        handleClose={() => setShowDeleteEmployeeModal(false)}
      />
    </div>
  );
}

export default App;
