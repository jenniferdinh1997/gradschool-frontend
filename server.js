require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const connectDB = require("./config/database");
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
app.use("/api/class", require("./routes/api/class"));
app.use("/api/users", require("./routes/api/users"));

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
