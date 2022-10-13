import { Modal, Button, Stack } from 'react-bootstrap';
import { useEmployees } from '../contexts/EmployeesContext';

export const DeleteEmployeeModal = ({ show, handleClose, employeeId, employeeName }) => {

  //import function from context hook
  const { deleteEmployee } = useEmployees();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        <h5>
          Are you sure you want to delete {employeeName}?
        </h5>
      </Modal.Body>
      <Stack direction='horizontal' gap='2' className='d-flex justify-content-around mt-4 mb-3'>
        <Button 
          className="btn btn-danger"
          onClick={() => {deleteEmployee(employeeId); handleClose()}}
        >
          Delete
        </Button>
        <Button 
          className="btn btn-secondary" 
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Stack>
    </Modal>
  );
};
