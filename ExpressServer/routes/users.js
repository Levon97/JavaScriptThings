const express = require('express');
const controller = require('../controllers/userControllers.js');

const router = express.Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.get('/search/:search', controller.searchUser);
router.delete('/:id', controller.deleteUser);
router.post('/', controller.newUser);
router.put('/:id',controller.updateUser);
module.exports = router;