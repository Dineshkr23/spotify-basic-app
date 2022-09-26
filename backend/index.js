const express = require('express');
const cors = require("cors");
const bodyparser = require("body-parser");
const routes = require("./routes");
const mongoLoader = require("./library/mongo");

const startServer = async() => {
    const app = express();
    app.use(cors());

    require("dotenv").config();
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.use("/",routes);

const PORT = process.env.PORT || 5000;

try{
    // await mongoLoader();
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
      app.timeout = 120000;
}
catch(error){
    console.log("Error connecting to DB",error);
}




}

startServer();
