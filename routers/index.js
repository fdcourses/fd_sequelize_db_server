const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const groupRouter = require('./groupRouter');

// http:localhost:3000/api ...
router.use('/users', userRouter);

router.use('/groups', groupRouter);

module.exports = router;