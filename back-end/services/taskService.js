const {
  getAll,
  create,
  byId,
} = require('../models/taskModels');

const getAllTasks = async () => {
  const data = await getAll();
  return data;
};

const createNewSchedule = async ({ tasksDay, created, lastUpdate }) => {
  const data = await create({ tasksDay, created, lastUpdate });
  return data;
};

const getById = async ({ id }) => {
  const data = await byId({ id });
  return data;
};

module.exports = { getAllTasks, createNewSchedule, getById };
