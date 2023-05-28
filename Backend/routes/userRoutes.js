const express = require("express");
const userControllers = require("../controllers/userControllers");
const authenticationControllers = require("../controllers/authenticatonControllers");

const router = express.Router();
router.patch(
  "/:id",
  authenticationControllers.protected,
  authenticationControllers.restrictedToUserAndAdmin
);

router.get(
  "/:id",
  authenticationControllers.protected,
  authenticationControllers.restrictedToUserAndAdmin,
  userControllers.singleUser
);

router.delete(
  "/:id",
  authenticationControllers.protected,
  authenticationControllers.restrictedToUserAndAdmin,

  userControllers.deleteUser
);

router.get(
  "/",
  authenticationControllers.protected,
  authenticationControllers.restrictedToAdmin,
  userControllers.allUser
);
module.exports = router;
