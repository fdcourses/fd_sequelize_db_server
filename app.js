const express = require('express');
const router = require('./routers');
const app = express();

const bodyParser = express.json(); // data stream -> JSON -> JS object -> req.body

app.use(bodyParser);

app.use(express.static('public'))

app.use('/api', router);

app.use(function (err, req, res, next) {

  res.status(500).send({
    errors: [{ message: err.message }],
  });
});

module.exports = app;
