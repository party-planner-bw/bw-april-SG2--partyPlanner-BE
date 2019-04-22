const router = require("express").Router();

const {
  getAll,
  getParty,
  addPartyById,
  getShoppingList
} = require("./party-model");

router.get("/", async (req, res) => {
  res.send("sanity over here");
});

router.get("/parties", async (req, res) => {
  getAll()
    .then(party => {
      res.status(200).json(party);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve party data" });
    });
});

router.get("/parties/:id", (req, res) => {
  const { id } = req.params;
  getParty(id)
    .then(party => {
      if (party) {
        return res.status(200).json(party);
      } else {
        return res.status(404).json({ error: "party not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "could not fetch party from server" });
    });
});

module.exports = router;
