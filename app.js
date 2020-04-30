const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const winston = require("./server/config/winston");

let config = require("./server/config/config.json");

config = config[process.env.NODE_ENV || "development"];

// Set up the express app
const app = express();
// Add Cors support
app.use(cors());

app.use(function (req, res, next) {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type, Content-Range, Content-Disposition, Content-Description,Origin, X-Requested-With, sessionId"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Log requests to the console.
app.use(logger("combined", { stream: winston.stream }));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require("./server/routes")(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

module.exports = app;
