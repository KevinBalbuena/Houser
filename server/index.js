const express = require("express");
const massive = require("massive");
require("dotenv").config();
const app = express();

massive(process.env.CONECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
