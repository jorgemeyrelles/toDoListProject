const {
  getAll,
  create,
} = require('../models/taskModels');

const getAllTasks = async () => {
  const data = await getAll();
  return data;
};

const createNewSchedule = async ({ tasksDay, created, lastUpdate }) => {
  const data = await create({ tasksDay, created, lastUpdate });
  return data;
};

module.exports = { getAllTasks, createNewSchedule };
