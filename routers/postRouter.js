const postRouter = require('express').Router();

const PostController = require('../controllers/postController');
// .../api/posts/
postRouter.post('/:userId',PostController.createPost);
postRouter.get('/:userId', PostController.getUserPosts);

module.exports = postRouter;