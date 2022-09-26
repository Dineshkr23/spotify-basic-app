const mongoose = require("mongoose");


const dbUri = process.env.databaseUrl || "mongodb+srv://dinesh:Dinesh1669@cluster0.9f703sk.mongodb.net/?retryWrites=true&w=majority";

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
