const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");
exports.register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    return next(err);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!email || !password) {
      return next(new Error("please provide email and password"));
    }
    if (!user) {
      return next(new Error("no user found"));
    }
    const IspasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!IspasswordCorrect) {
      return next(new Error("wrong password or username"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: "success",
        data: {
          user,
        },
      });
  } catch (err) {
    res.status(200).json(err);
  }
};

exports.protected = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(new Error("you are not authenticated"));
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return next(new Error("token is not valid"));
    }
    req.user = user;
    next();
  });
};

exports.restrictedToUserAndAdmin = async (req, res, next) => {
  try {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    }
  } catch (err) {
    return next(new Error("you are not allowed"));
  }
};

exports.restrictedToAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return next(new Error("you are not allowed"));
  }
};
