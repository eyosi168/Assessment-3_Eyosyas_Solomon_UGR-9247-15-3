var display = document.querySelector("#display");
var buttons = document.querySelectorAll(".btn");
function clicker(event) {
  var value = event.target.dataset.value;

  if (event.target.id === "equals") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  } else if (event.target.id === "clear") {
    display.value = "";
  } else if (value) {
    display.value += value;
  }
}


