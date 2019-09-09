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

module.exports = router;