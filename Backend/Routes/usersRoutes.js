const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/usersController");
const authController = require("../controllers/authControllers");

// ###########################################authentication###########################
// router.get(
//   "/authentication",
//   authController.authenticaion,
//   (req, res, next) => {
//     res.send("hello you are logged in");
//     next();
//   }
// );
// router.get("/verifyuser", authController.verifyUser, (req, res, next) => {
//   res.send("hello you are logged in and you can delete your account");
//   next();
// });

// router.get("/verifyadmin", authController.verifyAdmin, (req, res, next) => {
//   res.send("hello admin and you can delete all accounts");
//   next();
// });

// ########################get all###########################
router.get("/", authController.verifyAdmin, userControllers.getAllUsers);

// ########################get one###########################
router.get("/:id", authController.verifyUser, userControllers.getUser);

// ########################update###########################
// router.patch("/:id", (req, res) => {});
router.patch("/:id", authController.verifyUser, userControllers.updateUser);
// ########################delete###########################
router.delete("/:id", authController.verifyUser, userControllers.deleteUser);

module.exports = router;
