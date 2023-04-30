const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users routes :)");
});

module.exports = router;
