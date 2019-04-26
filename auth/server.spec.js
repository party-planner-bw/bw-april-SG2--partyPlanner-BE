// const db = require("../data/dbConfig");
// const partydb = require("../parties/party-model.js");
// const server = require("./server");
// const request = require("supertest");

// describe("party model", () => {
//   describe("insert", () => {
//     // afterEach(async () => {
//     //   await db("parties").truncate();
//     // });
//     it("insert party into database", async () => {
//       await partydb.addParty({
//         theme: "swimming",
//         date: "may 7th",
//         budget: 50,
//         guestCount: 1
//       });
//       const partyinfo = await db("parties");
//       expect(partyinfo).toHaveLength(1);
//       console.log(partyinfo);
//     });
//   });
//   describe("get request", () => {
//     it("should return status 200", () => {
//       return request(server)
//         .get("/parties")
//         .then(res => {
//           expect(res.status).toBe(200);
//         });
//     });
//   });
// });
