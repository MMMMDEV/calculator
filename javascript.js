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

console.log(operate(exponent, 3, 3));