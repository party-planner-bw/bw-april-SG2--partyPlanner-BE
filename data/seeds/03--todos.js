exports.seed = function(knex, Promise) {
  return knex("todoList").insert([
    { party_id: 1, todo: "hire a DJ" },
    { party_id: 2, todo: "talk to florist" },
    { party_id: 3, todo: "rent Dolorian" }
  ]);
};
