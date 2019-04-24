const router = require("express").Router();
const { authenticate } = require("../auth/authenticate");

const {
  getAll,
  getParty,
  addParty,
  getPartyItems,
  getPartyTodos
} = require("./party-model");

router.get("/", async (req, res) => {
  res.send("sanity over here");
});

//PARTY

//Get all parties
router.get("/parties", async (req, res) => {
  getAll()
    .then(party => {
      res.status(200).json(party);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve party data" });
    });
});

//get individual party with shopping items
// router.get("/parties/:id", authenticate, (req, res) => {
//   const { id } = req.params;
//   getParty(id)
//     .then(party => {
//       console.log(party);
//       if (party) {
//         return getPartyItems(id).then(items => {
//           party.items = items;
//           console.log(party);
//           return res.status(200).json({ party });
//         });
//       } else {
//         res.status(404).json({ error: "please provide project id" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Could not get party items" });
//     });
// });
//trying to get items and todos in one place
router.get("/parties/:id", authenticate, (req, res) => {
  const { id } = req.params;
  getParty(id)
    .then(party => {
      console.log(party);
      if (party) {
        getPartyItems(id).then(items => {
          party.items = items;
          getPartyTodos(id).then(todos => {
            party.todos = todos;
          });
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

//add a party

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

module.exports = router;
