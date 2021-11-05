// const { ObjectId } = require('mongodb');
const { ObjectId } = require('bson');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const ret = await db.collection('task').find().toArray();
  return ret;
};

const byId = async ({ id }) => {
  // console.log('byId 1', id);
  const db = await connection();
  const ret = await db.collection('task').findOne({ _id: ObjectId(id) });
  // console.log('byId 2', ret);
  return ret;
};

const create = async ({ tasksDay, created, lastUpdate }) => {
  const db = await connection();
  const ret = await db
    .collection('task').insertOne({ tasksDay, created, lastUpdate });
    console.log({
    tasksDay,
    created,
    lastUpdate,
    _id: ret.insertedId,
  });
  return {
    tasksDay,
    created,
    lastUpdate,
    _id: ret.insertedId,
  };
};

module.exports = { getAll, create };
