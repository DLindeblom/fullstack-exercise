import { useState } from 'react';
import { Container, Stack, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AddEmployeeModal } from './components/AddEmployeeModal';
import { EmployeeTable } from './components/EmployeeTable';
import { useEmployees } from "./contexts/EmployeesContext";

function App() {

  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const { variant, alertText, setAlertText } = useEmployees();

  console.log(variant, alertText)

  // const handleShowAlert = (alert) => {
  //   if (alert) {
  //     setInterval(() => {
  //       alert
  //     }, 3000)
  //   }
  // }

  return (
    <div className="vh-100" style={{ "background": "linear-gradient(to right, #D7E1EC, #FFFFFF" }}>
      <Container >
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto mt-5">Plexxis Employees</h1>
          <Button className="mt-5" onClick={() => setShowAddEmployeeModal(true)}>Add Employee</Button>
        </Stack>
        <Alert variant={variant} show={alertText? true : false} onClose={() => setAlertText("")} dismissible>
          {alertText}
        </Alert>
        <EmployeeTable />
      </Container>

      <AddEmployeeModal
        show={showAddEmployeeModal}
        handleClose={() => setShowAddEmployeeModal(false)}
      />

    </div>
  );
}

export default App;
