const express = require("express");
const authenticationControllers = require("../controllers/authenticatonControllers");

const router = express.Router();

router.post("/register", authenticationControllers.register);
router.post("/login", authenticationControllers.login);
module.exports = router;
