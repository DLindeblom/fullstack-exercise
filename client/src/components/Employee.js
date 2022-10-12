import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { DeleteEmployeeModal } from './DeleteEmployeeModal';
import { EditEmployeeModal } from './EditEmployeeModal';

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
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);

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
            onClick={() => setShowDeleteEmployeeModal(true)}
          >
            Delete
          </Button>
          <Button 
            className="btn btn-secondary btn-sm"
            onClick={() => setShowEditEmployeeModal(true)}
          >
            Edit
          </Button>
        </td>
      </tr>

      <DeleteEmployeeModal
        show={showDeleteEmployeeModal}
        handleClose={() => setShowDeleteEmployeeModal(false)}
        employeeId={id}
        employeeName={name}
      />

      <EditEmployeeModal
        show={showEditEmployeeModal}
        handleClose={() => setShowEditEmployeeModal(false)}
        id={id}
        name={name}
        code={code}
        profession={profession}
        color={color}
        city={city}
        branch={branch}
        assigned={assigned}
      />
    </>
  );
};
