const express = require('express');
const product = require('../data/sales.js');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.post("/sales",
  middlewares.productNameTest,
  middlewares.productInfosTest,
  (req, res) => {
  res.status(201).json({ message: 'Sale created successfully!' })
});

module.exports = routes