require("dotenv").config();

const server = require("./authApi/server.js/index.js");

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
