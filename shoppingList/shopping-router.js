const router = require("express").Router();
const { authenticate } = require("../auth/authenticate");

const {
  getShoppingList,
  addItem,
  deleteItem,
  getItemById,
  editItem
} = require("./shopping-model");

//ITEMS SHOPPING LIST
//get items
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

//add items
router.post("/items", (req, res) => {
  const item = req.body;
  const id = req.params.id;
  console.log(item);
  if (!item) {
    res.status(404).json({
      error: "please provide an item and party id to be added to the list"
    });
  } else {
    addItem(item)
      .then(id => {
        res.status(200).json({ message: "successfully added" });
      })
      .catch(error => {
        res.status(500).json({ error: "could not add item" });
      });
  }
});

//get items by id
router.get("/items/:id", (req, res) => {
  const { id } = req.params;
  getItemById(id)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(error => {
      res.status(500).json({ error: "could not get item" });
    });
});

//Delete item by id
router.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  deleteItem(id)
    .then(body => {
      deleteItem(body);
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "could not delete item" });
    });
});

//update item
router.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  editItem(id, body)
    .then(result => {
      res.status(200).json({ message: "Item updated" });
    })
    .catch(error => {
      res.status(500).json({ error: "could not update your item" });
    });
});

module.exports = router;
