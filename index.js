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

const todos = [
  {name: "Wash the car", complete: false},
  {name: "Paint House", complete: true},
  {name: "wash dog", complete: false}
];

app.get("/", function (request, respond) {
  respond.render("index", { todos: todos });
});

app.post("/", function (request, respond) {
  todos.push({"name":request.body.todo, "complete": false});
  respond.redirect("/");
});

app.listen(3000, function () {
  console.log("Successfully started to do list.");
});
