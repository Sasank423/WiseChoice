import mongoose from 'mongoose';
import { jwt } from 'jsonwebtoken';

const mongodburi = process.env.MONGODBURI;
console.log(mongodburi);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function startDb() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongodburi)
      .then(() => console.log('Connected to Database'))
      .catch((err) => console.log(err));
  }
  cached.promise = await cached.promise;
  return cached.conn;
}

export default startDb;
