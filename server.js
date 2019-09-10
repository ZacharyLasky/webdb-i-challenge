const express = require('express');
const router = require("./router.js")
const server = express();

server.use(express.json());

server.use("/api/accounts", router);

server.get("/", (req, res) => {
  res.send("GET TEST PASSED!");
})

module.exports = server;