var express = require("express");
var router = express.Router();
const { check, validationResult, body } = require("express-validator");
const { signout, signup, signin} = require("../controllers/auth");
const { userVerification, userForget, userPassReset } = require("../controllers/verify");

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

router.post("/verify/:token", userVerification)

router.post("/forget", [
  check('email', "Email Should Not Be Empty!").isEmail()
], userForget)

router.put("/forget/:token", [
  check('newPassword').isLength({min: 8, max: 20}).withMessage('Password Should Be 8-20 Characters!!')
                       .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,20}$/).withMessage('Password must contain alphabets, numbers & symbols')
], userPassReset);

router.get("/signout", signout);

module.exports = router;
