import { Modal, Form, Button, Stack } from 'react-bootstrap';
import { useRef } from 'react';
import { useEmployees } from '../contexts/EmployeesContext';


export const EditEmployeeModal = ({
  show,
  handleClose,
  id,
  name,
  code,
  profession,
  color,
  city,
  branch,
  assigned
}) => {

  //use DOM node instead of state to keep track of inputted form data
  const nameRef = useRef();
  const codeRef = useRef();
  const professionRef = useRef();
  const colorRef = useRef();
  const cityRef = useRef();
  const branchRef = useRef();
  const assignedRef = useRef();

  //import function from context hook
  const { updateEmployee } = useEmployees();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(
      {
        id: id,
        name: nameRef.current.value,
        code: codeRef.current.value,
        profession: professionRef.current.value,
        color: colorRef.current.value,
        city: cityRef.current.value,
        branch: branchRef.current.value,
        assigned: assignedRef.current.value
      }
    );
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee - {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" defaultValue={name} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="code">
            <Form.Label>Code</Form.Label>
            <Form.Control ref={codeRef} type="text" defaultValue={code} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Control ref={professionRef} type="text" defaultValue={profession} required />
          </Form.Group>
          <Form.Group className="mb-3" selectid="color">
            <Form.Label>Color</Form.Label>
            <Form.Select ref={colorRef} defaultValue={color} required>
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
            <Form.Control ref={cityRef} type="text" defaultValue={city} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="branch">
            <Form.Label>Branch</Form.Label>
            <Form.Control ref={branchRef} type="text" defaultValue={branch} required />
          </Form.Group>
          <Form.Group className="mb-3" selectid="assigned">
            <Form.Label>Assigned</Form.Label>
            <Form.Select ref={assignedRef} defaultValue={assigned} required>
              <option value="True">True</option>
              <option value="False">False</option>
            </Form.Select>
          </Form.Group>
          <Stack direction="horizontal" gap="1" className="d-flex justify-content-end">
            <div >
              <Button variant="primary" type="submit">Edit</Button>
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </div>
          </Stack>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
