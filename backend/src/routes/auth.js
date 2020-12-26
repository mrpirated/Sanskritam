var express = require("express");
var router = express.Router();
const { check, validationResult, body } = require("express-validator");
const { signout, signup, signin} = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    body('password').isLength({
      min: 8,
      max: 20
  }).withMessage('Password should be 8-20 characters long')
  .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,20}$/)
  .withMessage('Password must contain alphabets, numbers and symbols')
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
