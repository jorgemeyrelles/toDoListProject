const { MongoClient } = require('mongodb');
// require('dotenv').config();

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/toDoList';
const DB_NAME = 'toDoList';

let db = null;

const connection = async () => {
  if (db) return Promise.resolve(db);
  return MongoClient.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DB_NAME))
    .then((sch) => {
      db = sch;
      return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};  

module.exports = { connection };
