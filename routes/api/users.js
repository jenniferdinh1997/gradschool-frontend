const express = require("express");
const router = express.Router();


// @route   GET api/users
// @dessc   test route
// @access  Public
router.get("/login", (req,res) => res.send("User route"));

module.exports = router;