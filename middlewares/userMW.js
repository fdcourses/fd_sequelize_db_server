const  createError = require('http-errors');

const { User } = require('../models');

module.exports.findUser = async(req,res,next) => {
  try {
    const { params: {userId}} = req;

    const userInstance = await User.findByPk(userId);

    if(!userInstance) {
      // throw new Error('404. User not Found')
      const newError = createError(404, 'User not Found Please do stuff');
      next(newError);
    }

    req.userInstance = userInstance;

    next();
  } catch (error) {
    next(error);
  }
}