const User = require("../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { validationResult } = require("express-validator/check");

module.exports = {
  signup,
  login,
};

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, SECRET, { expiresIn: "24h" }, (err, token) => {
      if (err) {
        throw err;
      } else {
        res.json({ token });
      }
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(404).json({ errors: [{ user: "Not found" }] });
    } else {
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ password: "Incorrect" }] });
          }
          const token = createJWT(user);
          jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
              res.status(500).json({ errors: err });
            }
            if (decoded) {
              return res.status(200).json({
                success: true,
                token: token,
                message: user,
              });
            }
          });
        })
        .catch((err) => {
          res.status(500).json({ errors: err });
        });
    }
  });
};

const createJWT = (user) => {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
};
