const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const configureRoutes = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

module.exports = server;
