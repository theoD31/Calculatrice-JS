
//Partie affichage de la calculatrice

const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");

const tempResultEl = document.querySelector(".temp-result");

const numbersEl = document.querySelectorAll(".number");

const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");

const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

function display(element, value) {
    element.innerText = value;
}

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    display2El.innerText = "";
    dis2Num = "";
    tempResultEl.innerText = result;
}

function clearAll(){
    clearAllEl.addEventListener("click", () => {
        dis1Num = "";
        dis2Num = "";
        display(display1El, "")
        display(display2El, "")
        result = "";
        display(tempResultEl, "")
    });
}

function clearLastElem() {
    clearLastEl.addEventListener("click", () => {
        display(display2El, "")
        dis2Num = "";
    });
}

//Partie operation de la calculatrice

function mathOperation() {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } 
}

//Partie entree utilisateur de la calculatrice

//on déclare les variables générales

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;


function numbersEntered() {
  numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
      if(e.target.innerText === "." && !haveDot) {
        haveDot = true;
      }else if(e.target.innerText === "." && haveDot){
        return;
      }
      dis2Num += e.target.innerText;
      display(display2El, dis2Num);
    });
  });
}


function operationEntered(){
  operationEl.forEach((operation) => {
    operation.addEventListener("click", (e) => {
      if (!dis2Num) return;
      haveDot = false;

      const operationName = e.target.innerText;

      if (dis1Num && dis2Num && lastOperation) {
        mathOperation();
      } else {
        result = parseFloat(dis2Num);
      }
      clearVar(operationName);
      lastOperation = operationName;
    });
  });
}

equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;

  mathOperation();
  clearVar();
  display(display2El, result);
  display(tempResultEl, "");
  dis2Num = result;
  dis1Num = "";
});

window.addEventListener("keydown", (e) => {
  if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key === "Enter" || e.key === "=") {
    clickEqual();
  }
});

function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}


numbersEntered();
operationEntered();
clearAll();
clearLastElem();