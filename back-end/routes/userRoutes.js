const router = require('express').Router();
const {
  createNewUser,
  // getAllUsers,
} = require('../controllers/userController');
const {
  alreadyExist,
  verifyEmail,
  verifyName,
} = require('../middlewares/user');

// router.get('/'. getAllUsers);

router.post('/', verifyName, verifyEmail, alreadyExist, createNewUser);

module.exports = router;
