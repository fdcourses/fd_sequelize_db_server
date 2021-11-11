const { Post, User } = require('../models');

module.exports.createPost = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    // const newPost = await Post.create({ userId, ...body });

    const userInstance = await User.findByPk(userId);

    const newPost = await userInstance.createPost(body);

    res.send({data: newPost});
  } catch (error) {
    next(error);
  }
};

module.exports.getUserPosts = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    // const userWithPosts = await User.findOne({
    //   where: {
    //     id: userId,
    //   },
    //   include: Post
    // });

    const user = await User.findByPk(userId);

    const userPosts = await user.getPosts();

    const userWithPosts = {
      user,
      userPosts,
    };

    res.send({data: userWithPosts});
  } catch (error) {
    next(error);
  }
};

module.exports.deletePosts = async(req, res,next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findByPk(userId);

    const userPosts = await user.getPosts();
   
    const deletedItems = await Post.destroy({
      where: {
        userId: user.id
      }
    })

    res.send({data: userPosts});
  } catch (err) {
    
  }
}