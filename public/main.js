let buttons = document.querySelectorAll("button[type='button']");

buttons.forEach(function (button) {
  button.addEventListener("click", function(event) {
    const name = event.target.getAttribute("name");
    console.log(name);
  })
});
