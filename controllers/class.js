const Class = require("../models/Class");

const addClass = async (req, res) => {
  const course = await Class.create({
    user: req.body.user,
    subject: req.body.subject,
    name: req.body.name,
    institution: req.body.institution,
    units: req.body.units,
    grade: req.body.grade,
    notes: req.body.notes,
  });
  res.status(201).json({ course: course });
};

module.exports = {
  addClass,
};