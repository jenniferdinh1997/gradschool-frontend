const express = require("express");
const router = express.Router();


// @route   GET api/info
// @dessc   test route
// @access  Public
router.get("/", (req,res) => res.send("Info route"));

module.exports = router;