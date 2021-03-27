const router = require('express').Router();
const getReposCount = require('../controllers/controller')

router.get('/reposCount',getReposCount);


module.exports = router;