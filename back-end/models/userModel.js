const { connection } = require('./connection');

const getBy = async (key, value) => {
  const db = await connection();
  const ret = await db.collection('users').findOne({
    [key]: value,
  });
  return ret;
};

const getAll = async () => {
  const db = await connection();
  const ret = await db.collection('users').find().toArray();
  return ret;
};

const create = async ({ name, email, role }) => {
  const db = await connection();
  const ret = await db.collection('users').insertOne({ name, email, role });
  return { name, email, role, _id: ret.insertedId };
};

module.exports = { create, getAll, getBy };
