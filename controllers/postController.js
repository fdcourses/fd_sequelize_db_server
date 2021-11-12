const { Post, User } = require('../models');

module.exports.createPost = async (req, res, next) => {
  try {
    const {
      userInstance,
      body,
    } = req;

    // const newPost = await Post.create({ userId, ...body });

    const newPost = await userInstance.createPost(body);

    res.send({data: newPost});
  } catch (error) {
    next(error);
  }
};

module.exports.getUserPosts = async (req, res, next) => {
  try {
    const {
      userInstance
    } = req;

    // const userWithPosts = await User.findOne({
    //   where: {
    //     id: userId,
    //   },
    //   include: Post
    // });

    const userPosts = await userInstance.getPosts();

    const userWithPosts = {
      userInstance,
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
      userInstance
    } = req;



    const userPosts = await userInstance.getPosts();
   
    const deletedItems = await Post.destroy({
      where: {
        userId: userInstance.id
      }
    })

    res.send({data: userPosts});
  } catch (err) {
    
  }
}