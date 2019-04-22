exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("parties", tbl => {
      tbl.increments();
      tbl
        .string("theme", 128)
        .notNullable()
        .unique();
      tbl.string("date", 128).notNullable();
      tbl.integer("budget").notNullable();
      tbl.integer("guestCount").notNullable();
    })
    .createTable("shoppingList", tbl => {
      tbl.increments();
      tbl
        .integer("party_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parties")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("item", 128).unique();
      tbl.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("parties")
    .dropTableIfExists("shoppingList");
};
