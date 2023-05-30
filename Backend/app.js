const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./routes/authenticationRoutes");
const roomRoutes = require("./routes/roomRoutes");
const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/hotelRoutes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authenticationRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.Status || 500;
  const errorMessage = err.Message || "Something went wrong in Server";
  res.status(errorStatus).json({
    status: "fail",
    Message: errorMessage,
    stack: err.stack,
  });
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB);

// mongoose.connection.on("diconnected", () => {
//   console.log("disconnected from database");
// });
// mongoose.connection.on("connected", () => {
//   console.log("connected to database");
// });

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB);
const port = 8000;
app.listen(port, () => {
  console.log("the server is listening on port", port);
});
