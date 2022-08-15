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
    }
}

let add = "add";
let subtract = "subtract";
let multiply = "multiply";
let devide = "devide";

console.log(operate(devide, 2, 3));