const User = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const all = await User.getAllUsers();
    return res.status(200).json({ users: all });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro no controller user get' });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const role = 'user';
    const data = await User.createNewUser({ name, email, role });
    return res.status(201).json({ user: data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro no controller user post' });
  }
};

module.exports = { createNewUser, getAllUsers };
