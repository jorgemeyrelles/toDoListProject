// const { ObjectId } = require('mongodb');
const { ObjectId } = require('bson');
const { connection } = require('./connection');

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

const create = async ({ tasksDay, created, lastUpdate, _id }) => {
  const db = await connection();
  const ret = await db
    .collection('task').insertOne({ tasksDay, created, lastUpdate, userId: ObjectId(_id) });
  console.log({
    tasksDay,
    created,
    lastUpdate,
    _id: ret.insertedId,
    userId,
  });
  return {
    tasksDay,
    created,
    lastUpdate,
    _id: ret.insertedId,
    userId,
  };
};

const editOne = async ({ id, taskEdited, _id, lastUpdate }) => {
  const db = await connection();
  const ret = await db.collection('task')
    .findOneAndUpdate(
      { _id: ObjectId(id), userId: ObjectId(_id) },
      { $set: taskEdited, lastUpdate },
      { returnOriginal: false },
      );
  // console.log(ret.value);
  if (!ret.value) return null;
  return ret.value;
};

const excludeOne = async ({ id }) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  // const {
  //   name,
  //   ingredients,
  //   preparation,
  // } = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  await db.collection('task').deleteOne({ _id: ObjectId(id) });
  return { name, ingredients, preparation, _id: ObjectId(id) };
};

module.exports = { getAll, create, byId, editOne, excludeOne };
