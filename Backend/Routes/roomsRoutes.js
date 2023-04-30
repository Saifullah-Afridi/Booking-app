const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("rooms routes :)");
});

module.exports = router;
