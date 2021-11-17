const jwt = require('jsonwebtoken');
const Login = require('../services/loginService');

const secret = 'jLm*-+3258';

const config = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const newLogin = async (req, res) => {
  try {
    const { password, ...userWithoutPassword } = await req.body;
    const tkn = jwt.sign(userWithoutPassword, secret, config);
    // console.log(userWithoutPassword);
    const { email } = userWithoutPassword;
    await Login.newLogin({ email });
    return res.status(200).json({ token: tkn });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token was not generated' });
  }
};

module.exports = { newLogin };
