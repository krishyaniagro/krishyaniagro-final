const { MongoClient } = require('mongodb');
import { mongoURI } from '@/config/auth.config';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();

    cachedClient = client;
    cachedDb = db;
    console.log("Connected to MongoDB");
    return { client, db };
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    throw new Error("Could not connect to MongoDB");
  }
}

module.exports = { connectToDatabase };
