const User = require("../models/userModel");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

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

exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username || !email) && password) {
      return next(new Error("please provide username or email and password"));
    }
    const user = User.findOne({ username: username, email: email });
    if (!user) {
      return next(new Error("User does not exist"));
    }
  } catch (err) {
    return next(err);
  }
};
