const Class = require("../models/Class");

module.exports = {
  addClass,
};

const addClass = async (req, res) => {
  const course = await Class.create({
    user: req.user,
    subject: req.body.subject,
    name: req.body.name,
    institution: req.body.institution,
    units: req.body.units,
    grade: req.body.grade,
    notes: req.body.notes,
  });
  res.status(201).json({ course: course });
};