import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { DeleteEmployeeModal } from './DeleteEmployeeModal';

export const Employee = ({
  id,
  name,
  code,
  profession,
  color,
  city,
  branch,
  assigned,
}) => {

  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
  const [deleteEmployeeModalId, setDeleteEmployeeModalId] = useState();

  const openDeleteEmployeeModal = (id) => {
    setShowDeleteEmployeeModal(true)
    setDeleteEmployeeModalId(id)
  }

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{code}</td>
        <td>{profession}</td>
        <td style={{ "backgroundColor": color }}></td>
        <td>{city}</td>
        <td>{branch}</td>
        <td>{assigned}</td>
        <td className="d-flex justify-content-between">
          <Button
            className="btn btn-danger btn-sm"
            onClick={() => openDeleteEmployeeModal(id)}
          >
            Delete
          </Button>
          <Button className="btn btn-secondary btn-sm">Edit</Button>
        </td>
      </tr>

      <DeleteEmployeeModal
        show={showDeleteEmployeeModal}
        handleClose={() => setShowDeleteEmployeeModal(false)}
        employeeId={id}
        employeeName={name}
      />
    </>
  );
};
