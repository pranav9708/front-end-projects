let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let operators = ["+", "-", "/", "*", "%"];
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();

    if (operators.includes(value)) {
      operand1 = parseFloat(text);
      operator = value;
      display.textContent = "";
    } else if (value == "clear") {
      display.textContent = "";
    } else if (value == "+/-") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes(".")) {
        display.textContent = text + ".";
      }
    } else if (value == "=") {
      operand2 = parseFloat(text);
      var result = eval(operand1 + "" + operator + "" + operand2);
      display.textContent = result;
      operand1 = result;
      operand2 = null;
      operator = null;
    } else {
      display.innerText += value;
    }
  });
}
