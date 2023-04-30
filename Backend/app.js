// ################################## packages ##############################

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// ####################database connectivity ############################
//by making it true only the field specified in the schema will store in databasee
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB).then(() => {
  console.log("connected to the database");
});

//######################### built in module########################################
const authRoutes = require("./Routes/authRoutes");
const hotelsRoutes = require("./Routes/hotelsRoutes");
const roomsRoutes = require("./Routes/roomsRoutes");
const usersRoutes = require("./Routes/usersRoutes");

//########################## Middleware ##############################
app.use(express.json());
app.use(morgan("dev"));

//###############################routes######################################
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/hotels", hotelsRoutes);
app.use("/api/v1/rooms", roomsRoutes);
app.all("*", (req, res, next) => {
  return next(new Error("this route does not exist"));
});

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong";
  res.status(errStatus).json({
    status: "fail",
    status: errStatus,
    message: errMessage,
  });
});

// ###################################listening to server########################
app.listen(port, () => {
  console.log("Server is up and running on port : " + port);
});
