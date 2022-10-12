import { Modal, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useEmployees } from '../contexts/EmployeesContext';


export const AddEmployeeModal = ({ show, handleClose }) => {

  //useRef hook used to track input values in form
  const nameRef = useRef();
  const codeRef = useRef();
  const professionRef = useRef();
  const colorRef = useRef();
  const cityRef = useRef();
  const branchRef = useRef();
  const assignedRef = useRef();

  //import function from context hook
  const { addEmployee } = useEmployees();

  const handleSubmit = (e) => {
    e.preventDefault()
    addEmployee(
      {
        name: nameRef.current.value,
        code: codeRef.current.value,
        profession: professionRef.current.value,
        color: colorRef.current.value,
        city: cityRef.current.value,
        branch: branchRef.current.value,
        assigned: assignedRef.current.value
      }
    )
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="code">
            <Form.Label>Code</Form.Label>
            <Form.Control ref={codeRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Control ref={professionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" selectid="color">
            <Form.Label>Color</Form.Label>
            <Form.Select ref={colorRef} required>
              <option>Select a Color</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control ref={cityRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="branch">
            <Form.Label>Branch</Form.Label>
            <Form.Control ref={branchRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" selectid="assigned">
            <Form.Label>Assigned</Form.Label>
            <Form.Select ref={assignedRef} required>
              <option>Choose an option</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">Add</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
