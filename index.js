require("dotenv").config();

const server = require("./auth/server.js");

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
