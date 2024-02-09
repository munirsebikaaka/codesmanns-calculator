"use strict";
let displayContent = document.querySelector(".resive-contents");
const allButtons = document.querySelectorAll(".design-buttons");
const clearBtn = document.querySelector(".design-button");

////////////////////////////////////////////////////////////////
const allSymbols = ["+", "-", "*", "/", "="];
let firstValue = "";
let secondValue = "";
let symbol = "";
let results = "";
let deletes = "";
/////////////////////////////////////////////////////////////////
function calculations() {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);
  if (symbol === "+") results = firstValue + secondValue;
  if (symbol === "-") results = firstValue - secondValue;
  if (symbol === "/") results = firstValue / secondValue;
  if (symbol === "*") results = firstValue * secondValue;

  firstValue = results;
  secondValue = "";
  displayContent.textContent = results;
}

for (const el of allButtons) {
  el.addEventListener("click", function () {
    const btnValue = el.textContent;
    const btnSymbolIsClicked = allSymbols.includes(btnValue);
    if (firstValue && btnSymbolIsClicked) {
      secondValue && calculations();
      symbol = btnValue;
    } else if (!symbol) {
      firstValue += btnValue;
    } else if (symbol) {
      secondValue += btnValue;
    }
    if (btnValue !== "=") displayContent.textContent += btnValue;
  });
}
clearBtn.addEventListener("click", function () {
  firstValue = "";
  secondValue = "";
  symbol = "";
  displayContent.textContent = "";
});
