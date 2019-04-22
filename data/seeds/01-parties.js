exports.seed = function(knex, Promise) {
  return knex("parties").insert([
    { theme: "Disco", date: "May 25th", budget: 2000, guestCount: 150 },
    { theme: "Alien", date: "October 5th", budget: 20000, guestCount: 500 },
    { theme: "Christmas", date: "December 5th", budget: 200, guestCount: 15 },
    { theme: "Wedding", date: "June 5th", budget: 10000, guestCount: 100 },
    { theme: "70's", date: "May 5th", budget: 300, guestCount: 15 }
  ]);
};
