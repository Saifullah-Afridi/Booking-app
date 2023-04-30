const express = require("express");
const router = express.Router();
const hotelsControllers = require("../controllers/hotelsControllers");

router.post("/", hotelsControllers.createHotel);

// ########################get all###########################
router.get("/", hotelsControllers.getAllHotels);

// ########################get one###########################
router.get("/:id", hotelsControllers.getHotel);

// ########################update###########################
// router.patch("/:id", (req, res) => {});
router.patch("/:id", hotelsControllers.updateHotel);
// ########################delete###########################
router.delete("/:id", hotelsControllers.deleteHotel);

module.exports = router;
