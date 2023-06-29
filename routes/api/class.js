const express = require("express");
const router = express.Router();
const classCtrl = require("../../controllers/class");

router.post("/addClass", classCtrl.addClass);
router.get("/getClass", classCtrl.getClass);
router.delete("/deleteClass/:id", classCtrl.deleteClass);
router.put("/updateClass/:id", classCtrl.updateClass);

module.exports = router;