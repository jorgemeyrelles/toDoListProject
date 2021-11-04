const router = require('express').Router();
const {
  getAllTasksCont,
  createNewScheduleCont,
} = require('../controllers/taskController');

router.get('/', getAllTasksCont);

router.post('/', createNewScheduleCont);

module.exports = router;
