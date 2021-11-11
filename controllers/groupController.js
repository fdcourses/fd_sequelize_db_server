const _ = require('lodash');
const { Group, User } = require('../models');


module.exports.createGroup = async (req, res, next) => {
  try {
    const {body} = req;

    const groupBody = _.pick(body, ['title', 'description', 'imagePath']);

    const newGroup = await Group.create(groupBody);

    const user = await User.findByPk(body.userId);

    await newGroup.addUser(user);

    

    res.send({data: newGroup})
  } catch (error) {
    next(error);
  }
}

/*
 {
   title: 'test',
   abracadabra: ': DROP DATABASE'
 }

*/