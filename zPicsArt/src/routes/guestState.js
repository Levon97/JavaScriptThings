const { guestView } = require('../controllers/userController');
const router = require('express').Router();

router.get('/guest/posts',guestView);

module.exports = router;