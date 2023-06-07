const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    subject: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    grade: {
        type: String,
        enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
    }
});

module.exports = mongoose.model("Class", ClassSchema);