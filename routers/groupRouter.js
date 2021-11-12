const path = require('path');
const groupRouter = require('express').Router();
const GroupController = require('../controllers/groupController');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/images') )
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({storage});

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId',upload.single('image'), GroupController.createImage);

module.exports = groupRouter;