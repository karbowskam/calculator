import "../scss/style.scss";

window.onload = function () {
  calculator.init();
};

let calculator = {
  buttons: undefined,
  input: undefined,

  init: function () {
    this.buttons = document.querySelectorAll(".right-panel button, .left-panel button");
    this.input = document.getElementById("input");

    for (let i = 0; i < this.buttons.length; i++) {
      let el = this.buttons[i];
      el.addEventListener("click", this.buttonClick);
    }
  },

  buttonClick: function (e) {
    let htmlText = e.target.innerHTML;

    switch (htmlText) {
      case "=":
        calculator.evaluate();
        break;
      case "c":
        calculator.clear();
        break;
      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "0":
      case "00":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        calculator.addToInput(htmlText);
        break;
    }
  },

  addToInput: function (str) {
    this.input.value += str;
  },

  evaluate: function () {
    let result = math.evaluate(calculator.input.value);
    calculator.setInput(result);
  },

  clear: function () {
    calculator.setInput("");
  },

  setInput: function (str) {
    calculator.input.value = str;
  },
};
