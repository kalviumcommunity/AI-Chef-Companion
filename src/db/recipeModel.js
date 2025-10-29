// src/db/recipeModel.js
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const clientOptions = { serverSelectionTimeoutMS: 10000 };

const getCollection = async (col) => {
  const client = new MongoClient(uri, clientOptions);
  try {
    await client.connect();
    return client.db("ai_chef_companion").collection(col);
  } catch (err) {
    console.error("MongoDB connection timeout:", err);
    throw err;
  }
};

const saveRecipe = async (doc) => {
  const recipes = await getCollection("recipes");
  return recipes.insertOne(doc);
};

const getRecipes = async (query = {}) => {
  const recipes = await getCollection("recipes");
  return recipes.find(query).toArray();
};

module.exports = { saveRecipe, getRecipes };
