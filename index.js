const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");
const todoDal = require("./dal");
const baseRoutes = require("./routes");

let todos = require("./list");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.post("/change/:name", function (request, respond) {
  todos = todoDal.markComplete(request.body.done);
  respond.redirect("/");
});

app.use("/", baseRoutes);

app.listen(3000, function () {
  console.log("Successfully started to do list.");
});
