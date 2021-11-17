const {
  getAll,
  create,
  byId,
  editOne,
} = require('../models/taskModels');

const getAllTasks = async () => {
  const data = await getAll();
  return data;
};

const createNewSchedule = async ({ tasksDay, created, lastUpdate, _id }) => {
  const data = await create({ tasksDay, created, lastUpdate, _id });
  return data;
};

const getById = async ({ id }) => {
  const data = await byId({ id });
  return data;
};

const editOneTask = async ({ id, taskEdited, _id, lastUpdate }) => {
  // if (role === 'admin') {
  //   const data = await editOneAdmin({ id, recipeEdited });
  //   return data;
  // }
  const data = await editOne({ id, taskEdited, _id });
  return data;
};

module.exports = { getAllTasks, createNewSchedule, getById, editOneTask };
