const Login = require('../models/loginModel');
const Joi = require('joi');

const newLogin = async ({ email }) => {
  const { error } = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
  }).validate({ email });
  if (error) {
    return { err: { code: 'invalid_data', message: 'Invalid entries. Try again.' } };
  }
  const data = await Login.create({ email });
  return data;
};

module.exports = { newLogin };
