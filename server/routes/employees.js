const router = require('express').Router()

module.exports = (db) => {

  //get all employees
  router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM employees';

    db.query(queryString)
      .then(data => {
        res.json(data.rows);
      })
  });

  //add an employee
  router.post('/', (req, res) => {
    const queryString = `
      INSERT INTO employees (name, code, profession, color, city, branch, assigned)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      `
    
    const queryParams = [req.body.name, req.body.code, req.body.profession, req.body.colour, req.body.city, req.body.branch, req.body.assigned]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  })

  //delete an employee
  router.delete('/:id', (req, res) => {
    const queryString = `
      DELETE FROM employees
      WHERE id = $1
      `

    const queryParams = [req.params.id]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  })
  return router;
}