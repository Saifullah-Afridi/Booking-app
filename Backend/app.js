const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

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

app.listen(port, () =>
  console.log("Server is up and running on port : " + port)
);
