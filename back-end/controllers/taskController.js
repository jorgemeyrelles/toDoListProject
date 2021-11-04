const {
  getAllTasks,
  createNewSchedule,
} = require('../services/taskService');

const getAllTasksCont = async (req, res) => {
  try {
    const all = await getAllTasks();
    return res.status(200).json(all);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: 'Erro no controller getAll' });
  }
};

const createNewScheduleCont = async (req, res) => {
  try {
    console.log('controller');
    const tasksDay = req.body;
    // receber url da imagem
    // receber id do usuario logado
    // const token = req.headers.authorization;
    // const { email } = jwt.verify(token, secret, config);
    // const { _id } = await getByProperty('email', email);
    const date = new Date();
    const created = date.getDay();
    const lastUpdate = '-';
    const data = await createNewSchedule({ tasksDay, created, lastUpdate });
    return res.status(201).json({ taskList: data });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: 'Erro controller recipe' });
  }
};

module.exports = { getAllTasksCont, createNewScheduleCont};
