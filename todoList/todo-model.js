const db = require("../data/dbConfig.js");

module.exports = {
  getTodoList,
  addTodo,
  getPartyTodos,
  deleteTodo,
  getTodoById,
  editTodo
};

function getTodoList() {
  return db("todoList");
}

function addTodo(item) {
  return db("todoList").insert(item);
}

function getPartyTodos(id) {
  return db("todoList").where({ party_id: id });
}

function deleteTodo(id) {
  return db("todoList")
    .where({ id })
    .del();
}

function getTodoById(id) {
  return db("todoList")
    .where({ id })
    .first();
}

function editTodo(id, body) {
  return db("todoList")
    .where({ id })
    .update(body);
}
