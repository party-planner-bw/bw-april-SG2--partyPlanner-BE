const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  getParty,
  addParty,
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

function getPartyItems(id) {
  return db("shoppingList").where({ party_id: id });
}
