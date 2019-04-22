exports.up = function(knex, Promise) {
  return knex.schema.createTable("parties", tbl => {
    tbl.increments();
    tbl
      .string("theme", 128)
      .notNullable()
      .unique();
    tbl.string("date", 128).notNullable();
    tbl.integer("budget").notNullable();
    tbl.integer("guestCount").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("parties");
};
