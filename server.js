const express = require("express");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });