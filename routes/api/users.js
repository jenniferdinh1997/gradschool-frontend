const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("firstName", "Name required").not().isEmpty(),
    check("lastName", "Name required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be between 8-20 characters").isLength({
      min: 8,
      max: 20,
    }),
  ],
  usersCtrl.signup
);

router.post("/login", usersCtrl.login);

module.exports = router;
