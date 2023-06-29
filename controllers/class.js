const Class = require("../models/Class");

const addClass = async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ err });
  }
};

const getClass = async (req, res) => {
  const courses = await Class.find().exec();
  res.status(201).json({ courses });
};

const deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndRemove(req.params.id);
    res.status(201).json({ message: "Class successfully removed!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Could not delete");
  }
};

const updateClass = async (req, res) => {
  try {
    await Class.findByIdAndUpdate(
      req.params.id,
      {
        subject: req.body.subject,
        name: req.body.name,
        institution: req.body.institution,
        units: req.body.units,
        grade: req.body.grade,
        notes: req.body.notes,
      },
      {
        returnOriginal: false,
      }
    );
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  addClass,
  getClass,
  deleteClass,
  updateClass,
};
