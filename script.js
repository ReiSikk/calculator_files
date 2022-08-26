/////Reading the numbers and operator
let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let operator = document.querySelector("#operator");
let selector = operator.options[operator.selectedIndex].text;
let resultList = document.querySelector("#results");
let lastResult = resultList.lastElementChild;
let value = operator.value;
const calcBtn = document.querySelector("#calculate");
let newSelector;
let callCount = 0;

////Read the operator
readOperator();
function readOperator() {
  operator.addEventListener("change", (event) => {
    newSelector = event.target.value;
  });
  buttonClicked();
  console.log(newSelector);
}

function buttonClicked() {
  document.querySelector("#calculate").addEventListener("click", calcFunc);
}

function readFirstNumber() {
  firstNumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log("second number is:" + firstNumber);
}
function readSecondNumber() {
  secondNumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log("second number is:" + secondNumber);
}

//Doing the (optional) rounding

//Writing the result
function calcFunc() {
  /* readOperator(); */
  console.log("calcFunc called");
  if (newSelector === "add") {
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    lastResult.textContent = result;
    console.log(result);
  } else if (newSelector === "sub") {
    let result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    lastResult.textContent = result;
    console.log(result);
  } else if (newSelector === "div") {
    let result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    lastResult.textContent = result;
    console.log(result);
  } else if (newSelector === "mul") {
    let result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    lastResult.textContent = result;
    console.log(result);
  }
  /*   callCount += 1;
  console.log(callCount);
  moveResultUp(); */
}
/* function updateDisplay() {
  let lastResult = resultList.firstElementChild;
}
function moveResultUp() {
  lastResult.addEventListener("change", updateDisplay);
} */

//Clearing all the results
