//function to do operations
function operate (operator, num1, num2) {
    switch (operator) {
        case "add":
            return num1 + num2;
            break;
        case "subtract":
            return num1 - num2;
            break;
        case "multiply":
            return num1 * num2;
            break;
        case "devide":
            return num1 / num2;
            break;
        case "exponent":
            return Math.pow(num1, num2);
            break;
    }
}

let add = "add";
let subtract = "subtract";
let multiply = "multiply";
let devide = "devide";
let exponent = "exponent";

//populating display with numbers
const display = document.querySelector(".display");
const btn0 = document.querySelector("#btn-0");
const btn00 = document.querySelector("#btn-00");
const btnPeriod = document.querySelector("#btn-period");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");

let displayText = [];

btn0.addEventListener("click", e => {
    displayText.push("0");
    display.textContent = displayText.join("");
});

btn00.addEventListener("click", e => {
    displayText.push("00");
    display.textContent = displayText.join("");
})

btnPeriod.addEventListener("click", e => {
    if (!displayText.includes(".")) {
      displayText.push(".");
    display.textContent = displayText.join("");  
    } else {
        return;
    }; 
});

btn1.addEventListener("click", e => {
    displayText.push("1");
    display.textContent = displayText.join("");
});

btn2.addEventListener("click", e => {
    displayText.push("2");
    display.textContent = displayText.join("");
});

btn3.addEventListener("click", e => {
    displayText.push("3");
    display.textContent = displayText.join("");
});

btn4.addEventListener("click", e => {
    displayText.push("4");
    display.textContent = displayText.join("");
});

btn5.addEventListener("click", e => {
    displayText.push("5");
    display.textContent = displayText.join("");
});

btn6.addEventListener("click", e => {
    displayText.push("6");
    display.textContent = displayText.join("");
});

btn7.addEventListener("click", e => {
    displayText.push("7");
    display.textContent = displayText.join("");
});

btn8.addEventListener("click", e => {
    displayText.push("8");
    display.textContent = displayText.join("");
});

btn9.addEventListener("click", e => {
    displayText.push("9");
    display.textContent = displayText.join("");
});

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "0":
            displayText.push("0");
            display.textContent = displayText.join("");
            break;
            
        case ".":
            if (!displayText.includes(".")) {
                displayText.push(".");
              display.textContent = displayText.join("");  
              } else {
                  return;
              };
            break;

        case "1":
            displayText.push("1");
            display.textContent = displayText.join("");
            break;

        case "2":
            displayText.push("2");
            display.textContent = displayText.join("");
            break;

        case "3":
            displayText.push("3");
            display.textContent = displayText.join("");
            break;

        case "4":
            displayText.push("4");
            display.textContent = displayText.join("");
            break;

        case "5":
            displayText.push("5");
            display.textContent = displayText.join("");
            break;

        case "6":
            displayText.push("6");
            display.textContent = displayText.join("");
            break;

        case "7":
            displayText.push("7");
            display.textContent = displayText.join("");
            break;

        case "8":
            displayText.push("8");
            display.textContent = displayText.join("");
            break;

        case "9":
            displayText.push("9");
            display.textContent = displayText.join("");
            break;

    }
})
