exports.seed = function(knex, Promise) {
  return knex("shoppingList").insert([
    { party_id: 1, item: "tinsel" },
    { party_id: 2, item: "soda" },
    { party_id: 3, item: "alien ears" }
  ]);
};
