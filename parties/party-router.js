const router = require("express").Router();
const { authenticate } = require("../auth/authenticate");

const {
  getAll,
  getParty,
  addParty,
  getShoppingList,
  addItem,
  getPartyItems
} = require("./party-model");

router.get("/", async (req, res) => {
  res.send("sanity over here");
});

//PARTY
router.get("/parties", async (req, res) => {
  getAll()
    .then(party => {
      res.status(200).json(party);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve party data" });
    });
});

// router.get("/parties/:id", (req, res) => {
//   const { id } = req.params;
//   getParty(id)
//     .then(party => {
//       if (party) {
//         return res.status(200).json(party);
//       } else {
//         return res.status(404).json({ error: "party not found" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ error: "could not fetch party from server" });
//     });
// });

router.get("/parties/:id", authenticate, (req, res) => {
  const { id } = req.params;
  getParty(id)
    .then(party => {
      console.log(party);
      if (party) {
        return getPartyItems(id).then(items => {
          party.items = items;
          console.log(party);
          return res.status(200).json({ party });
        });
      } else {
        res.status(404).json({ error: "please provide project id" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "Could not get party items" });
    });
});

router.post("/parties", authenticate, (req, res) => {
  const party = req.body;
  console.log(party);
  if (!party.theme || !party.date || !party.budget || !party.guestCount) {
    res.status(404).json({
      error:
        "please provide a theme, date, budget, and guestCount for your party."
    });
  } else {
    addParty(party)
      .then(yay => {
        res.status(200).json({ message: "WooHoo!! Party!!" });
      })
      .catch(err => {
        res
          .status(500)
          .json({ err: "sorry, we could not add/start the party" });
      });
  }
});

router.get("/items", async (req, res) => {
  getShoppingList()
    .then(list => {
      console.log(list);
      res.status(200).json(list);
    })
    .catch(error => {
      res.status(500).json({ error: "could not get list" });
    });
});

router.post("/items/:id", (req, res) => {
  const item = req.body;
  if (!item) {
    res
      .status(404)
      .json({ error: "please provide an item to be added to the list" });
  } else {
    addItem({ item })
      .then(res => {
        res.status(200).json({ message: "Successfully added!" });
      })
      .catch(error => {
        res.status(500).json({ error: "could not add item" });
      });
  }
});

module.exports = router;
