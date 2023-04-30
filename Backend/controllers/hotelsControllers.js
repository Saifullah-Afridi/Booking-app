const Hotel = require("../models/hotelModel");

exports.createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      status: "success",
      totelHotels: hotels.length,
      data: {
        hotels,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};

exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};
