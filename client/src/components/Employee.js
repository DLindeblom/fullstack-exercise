import { Button } from 'react-bootstrap';

export const Employee = ({
  id, 
  name, 
  code,
  profession,
  color,
  city,
  branch,
  assigned
}) => {


  return (
    <tr key={id}>
    <td>{id}</td>
    <td>{name}</td>
    <td>{code}</td>
    <td>{profession}</td>
    <td style={{"backgroundColor": color}}></td>
    <td>{city}</td>
    <td>{branch}</td>
    <td>{assigned}</td>
    <td className="d-flex justify-content-between">
      <Button className="btn btn-danger btn-sm">Delete</Button>
      <Button className="btn btn-secondary btn-sm">Edit</Button>
    </td>
  </tr>
  )
}
