import { useState } from 'react';
import { Container, Stack, Button, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AddEmployeeModal } from './components/AddEmployeeModal';
import { EmployeeTable } from './components/EmployeeTable';

function App() {

  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  return (
    <div className="vh-100" style={{"background": "linear-gradient(to right, #D7E1EC, #FFFFFF"}}>
      <Container >
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto mt-5">Plexxis Employees</h1>
          <Button className="mt-5" onClick={() => setShowAddEmployeeModal(true)}>Add Employee</Button>
        </Stack>
        <Stack>
          <EmployeeTable/>
        </Stack>
      </Container>

      <AddEmployeeModal
        show={showAddEmployeeModal}
        handleClose={() => setShowAddEmployeeModal(false)}
      />

    </div>
  );
}

export default App;
