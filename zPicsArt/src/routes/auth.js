const router = require('express').Router();
const { registration,logIn } = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/register', registration);
router.post('/login',logIn);

module.exports = router;