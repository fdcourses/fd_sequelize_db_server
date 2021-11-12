const postRouter = require('express').Router();

const PostController = require('../controllers/postController');
// .../api/posts/
postRouter.post('/',PostController.createPost);
postRouter.get('/', PostController.getUserPosts);

postRouter.delete('/', PostController.deletePosts);

module.exports = postRouter;