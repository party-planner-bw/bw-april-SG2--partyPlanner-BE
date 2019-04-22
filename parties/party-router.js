const router = require("express").Router();

const { getAll } = require("./party-model");

router.get("/parties", async (req, res) => {
  getAll()
    .then(party => {
      res.status(200).json(party);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve party data" });
    });
});

module.exports = router;
