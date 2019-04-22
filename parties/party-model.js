const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  getParty,
  addParty,
  getShoppingList
};

function getAll() {
  return db("parties");
}

function getParty(id) {
  return db("parties")
    .where({ id })
    .first();
}

function addParty() {
  return db("parties").insert(party);
}

function getShoppingList() {
  return db("shoppingList");
}
