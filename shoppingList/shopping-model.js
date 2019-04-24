const db = require("../data/dbConfig.js");

module.exports = {
  getShoppingList,
  addItem,
  getPartyItems,
  deleteItem,
  getItemById,
  editItem
};

function getShoppingList() {
  return db("shoppingList");
}

function addItem(item) {
  return db("shoppingList").insert(item);
}

function getPartyItems(id) {
  return db("shoppingList").where({ party_id: id });
}

function deleteItem(id) {
  return db("shoppingList")
    .where({ id })
    .del();
}

function getItemById(id) {
  return db("shoppingList")
    .where({ id })
    .first();
}

function editItem(id, body) {
  return db("shoppingList")
    .where({ id })
    .update(body);
}
