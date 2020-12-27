require('dotenv').config();

const expressJwt = require('express-jwt');
const User = require("../models/user");
const { use } = require('./config/nodeMailer');

exports.isSignedIn = expressJwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256'],
    userProperty: "profile"
})

exports.isAuthenticated = (req, res, next) => {
  
  User.findById(req.profile._id, (err, user) => {
    if(!user)
      return res.status(401).json({err: "Not Registered!", success: false})
    
    if(user.isVerified === false)
      return res.status(403).json({err: "Not Verified!", success: false})

    req.root = new Object({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  })
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied"
    });
  }
  next();
};