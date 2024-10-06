import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI; // Get MongoDB URI from environment variables


if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

  const client = new MongoClient(uri);
  const clientPromise = client.connect();


export default clientPromise;
