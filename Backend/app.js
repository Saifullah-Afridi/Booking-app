const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

//by making it true only the field specified in the schema will store in databasee
const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB);
    console.log("connected to database");
  } catch (error) {
    // console.log(error);
    console.log("does not connected to database");
  }
};
// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv
//middleware
app.use(express.json());
app.use(morgan("dev"));

//database connectivity

//routers
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () => {
  connect();
  console.log("Server is up and running on port : " + port);
});
