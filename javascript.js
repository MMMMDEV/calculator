//function to do operations
let answer = [];

function operate (operator, num1, num2) {
    switch (operator) {
        case "add":
            answer.push(num1 + num2);
            break;
        case "subtract":
            answer.push(num1 - num2);
            break;
        case "multiply":
            answer.push(num1 * num2);
            break;
        case "devide":
            answer.push(num1 / num2);
            break;
        case "exponent":
            answer.push(Math.pow(num1, num2));
            break;
    }
}

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
let previousVal = displayText;
let nextVal ;
let currentOperator = "";

btn0.addEventListener("click", e => {
    displayText.push("0");
    display.textContent = displayText.join("");
});

btn00.addEventListener("click", e => {
    displayText.push("00");
    display.textContent = displayText.join("");
})

btnPeriod.addEventListener("click", e => {
    if (!displayText.toString().includes(".")) {
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
            if (!displayText.toString().includes(".")) {
                displayText.push(".");
                display.textContent = displayText.join("");  
              }
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

//allowing operating buttons to work and complete operations
const devision = document.querySelector("#devision-Btn");
const backSpace = document.querySelector("#backSpace-Btn");
const times = document.querySelector("#times-Btn");
const caret = document.querySelector("#caret-Btn");
const minus = document.querySelector("#minus-Btn");
const plus = document.querySelector("#plus-Btn");
const equal = document.querySelector("#equals-Btn");
const clear = document.querySelector("#clear-Btn");

devision.addEventListener("click", e => {
    displayText = [];
    displayText.join("");
    currentOperator = "devide";
});

equal.addEventListener("click", e => {
    nextVal = displayText;
    operate(currentOperator, previousVal.join(""), nextVal.join(""));
    displayText = answer;
    display.textContent = displayText.join("");
    console.log(displayText.toString().includes("."));
});

clear.addEventListener("click", e => {
    displayText = [];
    answer = [];
    nextVal = [];
    previousVal = displayText;
    display.textContent = displayText;
})

