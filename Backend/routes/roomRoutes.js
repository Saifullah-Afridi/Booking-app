const express = require("express");
const roomControllers = require("../controllers/roomControllers");
const authenticatonControllers = require("../controllers/authenticatonControllers");

const router = express.Router();

router.post(
  "/:hotelid",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  roomControllers.createRoom
);
router.patch(
  "/:id",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  roomControllers.updateRoom
);

router.get("/:id", roomControllers.singleRoom);

router.delete(
  "/:id/:hotelid",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  roomControllers.deleteRoom
);

router.get("/", roomControllers.allRoom);

module.exports = router;
