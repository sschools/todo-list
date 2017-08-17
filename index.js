const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");
const todoDal = require("./dal");

let todos = require("./list");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());



app.get("/", function (request, respond) {
  respond.render("index", { todos: todos });
});

app.post("/change/:name", function (request, respond) {
  todos = todoDal.markComplete(request.body.done);
  respond.redirect("/");
});

app.post("/", function (request, respond) {
  todos = todoDal.addItem(request.body.todo);
  respond.redirect("/");
});

app.listen(3000, function () {
  console.log("Successfully started to do list.");
});
