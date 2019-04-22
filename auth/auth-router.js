const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { find, findBy, findById, add } = require("./auth-model.js");
const secret = process.env.JWT_SECRET;
const { authenticate } = require("./authenticate");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 9);
  user.password = hash;

  add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ error: "problem registering" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

router.get("./protected", authenticate, (req, res) => {
  const requestOptions = {
    headers: { accept: "application/json" }
  };
  axios
    .get("localhost:3300/protected", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "error fetching protected data" });
    });
});

module.exports = router;
