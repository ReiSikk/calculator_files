"use strict";

window.addEventListener("load", init);

let resultList = document.querySelector("#results");
let lastResult = resultList.lastElementChild;
let value = operator.value;
const calcBtn = document.querySelector("#calculate");
let resultRounded;
let result;

function init() {
  calcBtn.addEventListener("click", calcFunc);
  document.querySelector("#clear").addEventListener("click", clearAll);
}

//calculating the equation
function calcFunc() {
  //read the operator and input string values
  const operator = document.querySelector("#operator").value;
  const firstString = document.querySelector("#firstnumber").value;
  const secondString = document.querySelector("#secondnumber").value;
  //convert strings to numbers
  const firstNumber = Number.parseFloat(firstString);
  const secondNumber = Number.parseFloat(secondString);

  if (operator === "add") {
    result = firstNumber + secondNumber;
  }
  if (operator === "sub") {
    result = firstNumber - secondNumber;
  }
  if (operator === "div") {
    result = firstNumber / secondNumber;
  }
  if (operator === "mul") {
    result = firstNumber * secondNumber;
    console.log(result);
  }
  //give the first number, the latest result value
  document.querySelector("#firstnumber").value = result;
  //reading if the rounding checkbox is checked
  const rounding = document.querySelector("#doround").checked;
  //doing the rounding
  if (rounding) {
    const decimals = document.querySelector("#decimals").value;
    resultRounded = result.toFixed(decimals);
    document.querySelector("#firstnumber").value = resultRounded;
    appendRounded();
  } else {
    appendNumber();
  }
}

////Appending the results
function appendNumber() {
  let li = document.querySelector("li");
  li.textContent = result;
  resultList.append(li);
  resultList.scrollTo(0, 1000000);
}
function appendRounded() {
  let li = document.querySelector("li");
  li.textContent = resultRounded;
  resultList.append(li);
  resultList.scrollTo(0, 1000000);
}
//Clearing all the results

function clearAll() {
  lastResult.textContent = "0";
  document.querySelector("#result1").textContent = "0";
  document.querySelector("#result2").textContent = "0";
  document.querySelector("#result3").textContent = "0";
  document.querySelector("#doround").checked = false;
  document.querySelector("#firstnumber").value = "";
  document.querySelector("#secondnumber").value = "";
  document.querySelector("#decimals").value = "";
  console.log("clearAll");
}
