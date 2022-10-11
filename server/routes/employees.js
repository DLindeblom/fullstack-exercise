const router = require('express').Router();

module.exports = (db) => {

  //get all employees
  router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM employees';

    db.query(queryString)
      .then(data => {
        res.json(data.rows);
      })
  });

  return router;
}