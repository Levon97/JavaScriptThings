const router = require('express').Router();
const verifyToken = require('../middlewares/validateToken');
const { creatPost, editPost, deletePost, getAllPosts, getPostsOfDay, getMyPosts,searchPost,getPostById,usersPosts, searchUser } = require('../controllers/userController');
const upload = require('../utils');

router.use(verifyToken);
router.post('/user/posts', upload.single('image'), creatPost);
router.put('/user/posts/:id', upload.single('image'), editPost);
router.delete('/user/posts/:id', deletePost);
router.get('/user/posts/:id',getPostById);
router.get('/user/posts/created_by/:id',usersPosts);
router.get('/user/posts/recently_created', getPostsOfDay);
router.get('/user/posts', getAllPosts);
router.get('/user/posts/personal_created',getMyPosts);
router.get('/user/posts/:search',searchPost);
router.get('/user/:search',searchUser)
module.exports = router;