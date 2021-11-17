const { connection } = require('./connection');

const create = async ({ email }) => {
  const db = await connection();
  const ret = await db.collection('users').findOne({ email });
  return ret;
};

module.exports = { create };
