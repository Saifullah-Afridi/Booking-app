const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

module.exports = router;
