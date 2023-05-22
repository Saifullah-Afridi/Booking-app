const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    return next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new Error("please provide username or email and password"));
    }
    if (!password) {
      return next(new Error("please provide password"));
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new Error("User does not exist"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(new Error("please provide the correct password"));
    }
    const token = await jwt.sign(
      {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_KEY
    );
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

exports.authenticaion = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(new Error("please login and try again"));
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next("token is not valid");
    }
    req.user = user;
    next();
  });
};

exports.verifyUser = (req, res, next) => {
  authentication(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(new Error("you are not allowed to perform this action"));
    }
  });
};

exports.verifyAdmin = (req, res, next) => {
  authentication(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(new Error("you are not allowed to perform this action"));
    }
  });
};
