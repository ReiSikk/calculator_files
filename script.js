/////Reading the numbers and operator
let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
let operator = document.querySelector("#operator");
let selector = operator.options[operator.selectedIndex].text;
let resultList = document.querySelector("#results");
let lastResult = resultList.lastElementChild;
let value = operator.value;
const calcBtn = document.querySelector("#calculate");
////Doing the calculation

document.querySelector("#calculate").addEventListener("click", calcFunc);

function readFirstNumber() {
  firstNumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log("second number is:" + firstNumber);
}
function readSecondNumber() {
  secondNumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log("second number is:" + secondNumber);
}
function readOperator() {
  let text = operator.options[operator.selectedIndex].text;
  let value = operator.value;
  console.log(value);
}

//Doing the (optional) rounding

//Writing the result
function calcFunc() {
  readOperator();
  console.log("calcFunc called");
  if (value === "add") {
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    lastResult.textContent = result;
    console.log(result);
  } else if (value === "sub") {
    console.log(result);
    result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    lastResult.textContent = result;
  } else if (value === "div") {
    console.log(result);
    lastResult.textContent = result;
    result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
  } else if (value === "mul") {
    console.log(result);
    lastResult.textContent = result;
    result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
  }
}

//Clearing all the results
