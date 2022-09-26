const mongoose = require("mongoose");


const dbUri = process.env.databaseUrl || "mongodb://localhost:27017/spotify";

const mongoLoader = () =>
  new Promise(async (resolve, reject) => {
    try {
      const connection = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
      });
      resolve(connection.connection.db);
    } catch (error) {
      reject(error);
    }
  });

module.exports = mongoLoader;
