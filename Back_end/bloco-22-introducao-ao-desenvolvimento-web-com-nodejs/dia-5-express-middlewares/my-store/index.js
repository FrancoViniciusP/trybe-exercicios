const express = require('express');
const middlewares = require('./middlewares');

const api = express();

api.use(express.json());

api.use('/v1', require('./routes') );

api.use(middlewares.errorHandler);

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
  console.log(`Subiu na porta ${PORT}`)
})