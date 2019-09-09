const express = require('express')
const db = require('./data/dbConfig.js');
const router = express.Router();

//CRUD Operations

//GET /api/accounts
router.get("/", (req, res) => {
  db.select('*')
    .from('accounts')
      .then(accountInfo => {
        res.status(200).json(accountInfo)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

//POST /api/accounts
router.post('/', (req, res) => {
  const postData = req.body;
  db('accounts')
    .insert(postData, 'id')
      .then(([id]) => {
          db('accounts')
            .where({ id }) 
            .first() 
            .then(account => {
                res.status(200).json(account);
            });
      })
  .catch(err => {
      res.json(err);
  });
});

module.exports = router;