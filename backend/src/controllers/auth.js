const User = require("../models/user");
const { validationResult } = require("express-validator");
var { emailVerification } = require('../config/mailTemplate');
var crypto = require('crypto')
var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (user)
      return res.status(403).json({
        err: "Email Already Exists!!",
        success: false
      })
  })

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    verifyToken: crypto.randomBytes(30).toString('hex')
  });

  newUser.save()
  .then((user) => {
    emailVerification(user.email, user.name, `http://localhost:3000/auth/verify/${user.verifyToken}`)
  })
  .catch((err) => {
    return res.status(500).json({err: err, success: false})
  })

  return res.status(200).json({msg: "Signup Success!! Verify Mail!", success: true})
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    }

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send response to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role }, success: true });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};