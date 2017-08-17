let todo = require("./list");

function markComplete(item) {
  return todo.map(function(eachTodo) {
    if (eachTodo.name === item) {
      eachTodo.complete = true;
      return eachTodo;
    } else {
      return eachTodo;
    }
  })
}

function addItem(name) {
  todo.push({"name":name, "complete":false});
  return todo;
}

module.exports = {
  markComplete: markComplete,
  addItem: addItem
}
