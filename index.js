const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

const todos = [];

app.get("/", function (request, respond) {
  respond.render("index", { todos: todos });
});

app.post("/change/:name", function (request, respond) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].name === request.body.done) {
      todos[i].complete = true;
    }
  }
  respond.redirect("/");
});

app.post("/", function (request, respond) {
  todos.push({"name":request.body.todo, "complete": false});
  respond.redirect("/");
});

app.listen(3000, function () {
  console.log("Successfully started to do list.");
});
