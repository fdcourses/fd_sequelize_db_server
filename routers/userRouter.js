const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const { findUser} = require('../middlewares/userMW');
const postRouter = require('./postRouter');

// GET http://localhost:3000/api/users
userRouter.get('/', UserController.getUsers);

userRouter.post('/', UserController.createUser);

userRouter.patch('/:id', UserController.updateUser);

userRouter.delete('/:id', UserController.deleteUser);

userRouter.use('/:userId/posts', findUser, postRouter);

module.exports = userRouter;