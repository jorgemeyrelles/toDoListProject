const { getByProperty } = require('../services/userService');

const verifyEmpyt = (value) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return true;
};

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (!verifyEmpyt(name)) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log('vazio', verifyEmpyt(email), 'formato', regex.test(email));
  if (!verifyEmpyt(email) || !regex.test(email)) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const alreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const existUser = await getByProperty('email', email);
  // console.log('existUser', existUser);
  if (existUser !== null) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

// const verifyPassword = (req, res, next) => {
//   const { password } = req.body;
//   if (!verifyEmpyt(password)) {
//     return res.status(400).json({
//       message: 'Invalid entries. Try again.',
//     });
//   }
//   next();
// };

module.exports = { verifyName, verifyEmail, verifyPassword, alreadyExist };
