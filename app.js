const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, function() {
  console.log("Server is running on Port", PORT);
});

app.get("/", function(req, res) {
  res.render("login");
});
