const Hotel = require("../models/hotelModel");

exports.createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!updatedHotel) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        updatedHotel,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.singleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        deletedHotel,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.allHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      status: "success",
      length: hotels.length,
      data: {
        hotels,
      },
    });
  } catch (err) {
    return next(err);
  }
};
