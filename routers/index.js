const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

// http:localhost:3000/api ...
router.use('/users', userRouter);
// router.use('/tasks', taskRouter);
router.use('/posts', postRouter);

module.exports = router;