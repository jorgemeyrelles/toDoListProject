const {
  getAllTasks,
  createNewSchedule,
  getById,
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
    const tasksDay = req.body;
    // receber url da imagem
    // receber id do usuario logado
    // const token = req.headers.authorization;
    // const { email } = jwt.verify(token, secret, config);
    // const { _id } = await getByProperty('email', email);
    const date = new Date();
    const created = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/
    const lastUpdate = '-';
    const data = await createNewSchedule({ tasksDay, created, lastUpdate });
    return res.status(201).json({ taskList: data });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: 'Erro controller recipe' });
  }
};

const getByIdCont = async (req, res) => {
  try {
    const { id } = req.params;
    const oneRecipe = await getById({ id });
    return res.status(200).json(oneRecipe);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: 'recipe not found' });
  }
};

module.exports = { getAllTasksCont, createNewScheduleCont, getByIdCont };
