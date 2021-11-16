const express = require('express');
const router = require('./routers');
const app = express();
const {errorHandler} = require('./middlewares/errorHandlers');

const bodyParser = express.json(); // data stream -> JSON -> JS object -> req.body

app.use(bodyParser);

app.use(express.static('public'))

app.use('/api', router);

app.use(errorHandler);

module.exports = app;
