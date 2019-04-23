const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  getParty,
  addParty,
  getShoppingList,
  addItem,
  getPartyItems
};

function getAll() {
  return db("parties");
}

function getParty(id) {
  return db("parties")
    .where({ id })
    .first();
}

function addParty(party) {
  return db("parties").insert(party);
}

function getShoppingList() {
  return db("shoppingList");
}

function addItem(item) {
  return db("shoppingList").insert(item);
}

function getPartyItems(id) {
  return db("shoppingList").where({ party_id: id });
}
