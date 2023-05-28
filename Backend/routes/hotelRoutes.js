const express = require("express");
const hotelControllers = require("../controllers/hotelControllers");
const authenticatonControllers = require("../controllers/authenticatonControllers");

const router = express.Router();

router.post(
  "/",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  hotelControllers.createHotel
);
router.patch(
  "/:id",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  hotelControllers.updateHotel
);

router.get("/:id", hotelControllers.singleHotel);

router.delete(
  "/:id",
  authenticatonControllers.protected,
  authenticatonControllers.restrictedToAdmin,
  hotelControllers.deleteHotel
);

router.get("/", hotelControllers.allHotel);

module.exports = router;
