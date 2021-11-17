const { getByProperty } = require('../services/userService');

const verifyEmpyt = (value) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return true;
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log('vazio', verifyEmpyt(email), 'formato', regex.test(email));
  if (!verifyEmpyt(email)) {
    return res.status(401).json({
      message: 'All fields must be filled',
    });
  }
  next();
};

// const verifyPassword = (req, res, next) => {
//   const { password } = req.body;
//   if (!verifyEmpyt(password)) {
//     return res.status(401).json({
//       message: 'All fields must be filled',
//     });
//   }
//   next();
// };

const alreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const userVerified = await getByProperty('email', email);
  // const passVirefied = await getByProperty('password', password);
  if (userVerified === null) {
    return res.status(401).json({
      message: 'User do not registered yet',
    });
  }
  next();
};

module.exports = { verifyEmail, alreadyExist };
