const _ = require('lodash');
const { Group, User } = require('../models');

module.exports.createGroup = async (req, res, next) => {
  try {
    const { body } = req;

    const groupBody = _.pick(body, ['title', 'description', 'imagePath']);

    const newGroup = await Group.create(groupBody);

    const user = await User.findByPk(body.userId);

    await newGroup.addUser(user);

    res.send({ data: newGroup });
  } catch (error) {
    next(error);
  }
};

module.exports.createImage = async (req, res, next) => {
  try {
    /*
{
  "fieldname": "image", 
  "originalname": "Rectangle.png",
  "encoding": "7bit",
  "mimetype": "image/png",
  "destination": "uploads/",
  "filename": "b8fe296d8947b1604e01c4972ec9d8fd",
  "path": "uploads/b8fe296d8947b1604e01c4972ec9d8fd",
  "size": 249836
}
 */

    const {
      params: { groupId },
      file: {filename},
    } = req;

    const [rows, [updatedGroup]] = await Group.update(
      { imagePath: filename },
      { where: { id: groupId }, returning: true }
    );

    res.send({ data: updatedGroup });
  } catch (error) {
    next(error);
  }
};

/*
 {
   title: 'test',
   abracadabra: ': DROP DATABASE'
 }

*/
