const User = require('../models/usersModel');

const getByProperty = async (key, value) => {
  const data = await User.getBy(key, value);
  return data;
};

const getAllUsers = async () => {
  const data = await User.getAll();
  return data;
};

const createNewUser = async ({ name, email, role }) => {
  const data = await User.create({ name, email, role });
  return data;
};

module.exports = { createNewUser, getAllUsers, getByProperty };
