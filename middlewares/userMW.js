const { User } = require('../models');

module.exports.findUser = async(req,res,next) => {
  try {
    const { params: {userId}} = req;

    const userInstance = await User.findByPk(userId);

    if(!userInstance) {
      throw new Error('404. User not Found')
    }

    req.userInstance = userInstance;

    next();
  } catch (error) {
    next(error);
  }
}