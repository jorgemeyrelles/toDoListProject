// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const ret = await db.collection('task').find().toArray();
  return ret;
};

const create = async ({ tasksDay, created, lastUpdate }) => {
  console.log('model');
  const db = await connection();
  const ret = await db
    .collection('task').insertOne({ tasksDay, created, lastUpdate });
  return {
    tasksDay,
    created,
    lastUpdate,
    _id: ret.insertedId,
  };
};

module.exports = { getAll, create };
