const express = require("express");
const router = express.Router();
const todoDal = require("./dal");
let todos = require("./list");


router.route("/")
  .get(function (request, respond) {
    respond.render("index", { todos: todos });
  })
  .post(function (request, respond) {
    todos = todoDal.addItem(request.body.todo);
    respond.redirect("/");
  });

  module.exports = router;
