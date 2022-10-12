const router = require('express').Router()
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

module.exports = (db) => {

  //get all employees
  router.get('/', cors(corsOptions), (req, res) => {
    const queryString = 'SELECT * FROM employees';

    db.query(queryString)
      .then(data => {
        res.json(data.rows);
      })
  });

  //add an employee
  router.post('/', cors(corsOptions), (req, res) => {
    const queryString = `
      INSERT INTO employees (name, code, profession, color, city, branch, assigned)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      `
    
    const queryParams = [req.body.name, req.body.code, req.body.profession, req.body.color, req.body.city, req.body.branch, req.body.assigned]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  });

  //update employee information
  router.put('update/:id', cors(corsOptions), (req, res) => {
    const queryString = `
      UPDATE employees
      SET name = $1,
          code = $2,
          profession = $3,
          color = $4,
          city = $5,
          branch = $6,
          assigned = $7
      WHERE id = $8
    `

    const queryParams = [req.body.name, req.body.code, req.body.profession, req.body.colour, req.body.city, req.body.branch, req.body.assigned, req.params.id];

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  })

  //delete an employee
  router.delete('delete/:id', cors(corsOptions), (req, res) => {
    const queryString = `
      DELETE FROM employees
      WHERE id = $1
      `

    const queryParams = [req.params.id]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  });

  return router;
}