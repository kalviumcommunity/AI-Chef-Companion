// src/db/evaluationModel.js
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const getCollection = async (col) => {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db("ai_chef_companion").collection(col);
};

const saveEval = async (doc) => {
  const evals = await getCollection("evaluations");
  return evals.insertOne(doc);
};

const getEvals = async (query = {}) => {
  const evals = await getCollection("evaluations");
  return evals.find(query).toArray();
};

module.exports = { saveEval, getEvals };
