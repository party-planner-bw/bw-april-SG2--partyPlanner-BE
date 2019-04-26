const router = require("express").Router();
const { authenticate } = require("../auth/authenticate");

const {
  getTodoList,
  addTodo,
  deleteTodo,
  getTodoById,
  editTodo
} = require("./todo-model");

//ITEMS SHOPPING LIST
//get items
router.get("/todos", async (req, res) => {
  getTodoList()
    .then(todo => {
      console.log(todo);
      res.status(200).json(todo);
    })
    .catch(error => {
      res.status(500).json({ error: "could not get list" });
    });
});

//add items
router.post("/todos", (req, res) => {
  const todo = req.body;
  const id = req.params.id;
  console.log(todo);
  if (!todo) {
    res.status(404).json({
      error: "please provide an item and party id to be added to the list"
    });
  } else {
    addTodo(todo)
      .then(id => {
        res.status(200).json({ message: "successfully added" });
      })
      .catch(error => {
        res.status(500).json({ error: "could not add item" });
      });
  }
});

//get items by id
router.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  getTodoById(id)
    .then(todo => {
      res.status(200).json(todo);
    })
    .catch(error => {
      res.status(500).json({ error: "could not get item" });
    });
});

//Delete item by id
router.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  deleteTodo(id)
    .then(body => {
      deleteTodo(body);
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "could not delete item" });
    });
});

//update item
router.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  editTodo(id, body)
    .then(result => {
      res.status(200).json({ message: "Item updated" });
    })
    .catch(error => {
      res.status(500).json({ error: "could not update your item" });
    });
});

module.exports = router;
