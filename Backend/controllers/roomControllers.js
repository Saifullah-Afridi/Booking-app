const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");

exports.createRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelid;
    const newRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });
    res.status(201).json({
      status: "success",
      data: {
        newRoom,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!updatedRoom) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        updatedRoom,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.singleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        room,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelid;
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });

    if (!deletedRoom) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        deletedRoom,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.allRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      status: "success",
      length: rooms.length,
      data: {
        hotels,
      },
    });
  } catch (err) {
    return next(err);
  }
};
