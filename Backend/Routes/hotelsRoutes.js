const express = require("express");
const router = express.Router();
const hotelsControllers = require("../controllers/hotelsControllers");
const authControllers = require("../controllers/authControllers");

router.post("/", authControllers.verifyAdmin, hotelsControllers.createHotel);

router.patch(
  "/:id",
  authControllers.verifyAdmin,
  hotelsControllers.updateHotel
);

router.delete(
  "/:id",
  authControllers.verifyAdmin,
  hotelsControllers.deleteHotel
);

router.get("/", hotelsControllers.getAllHotels);

router.get("/:id", hotelsControllers.getHotel);
module.exports = router;
