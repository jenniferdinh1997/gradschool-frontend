require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const connectDB = require("./config/database");
const {check, validationResult} = require("express-validator/check");
const cors = require("cors");

const app = express();

// Connect database
connectDB();

// Mounting the middleware
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

// Defining routes
app.use("/api/info", require("./routes/api/info"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app listening on port ${port}`);
});