// src/db/recipeModel.js
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const getCollection = async (col) => {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db("ai_chef_companion").collection(col);
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
