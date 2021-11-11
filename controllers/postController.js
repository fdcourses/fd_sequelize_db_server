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

    res.send(newPost);
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

    res.send(userWithPosts);
  } catch (error) {
    next(error);
  }
};
