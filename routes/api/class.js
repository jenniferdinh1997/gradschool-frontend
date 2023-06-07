const express = require("express");
const router = express.Router();
const classCtrl = require("../../controllers/class");

router.post("/addClass", classCtrl.addClass);

module.exports = router;