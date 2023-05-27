function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function calculator() {
    const num1 = parseFloat(document.getElementById("num1").value); // Corrected method name
    const num2 = parseFloat(document.getElementById("num2").value); // Corrected method name
    var operator = document.getElementById("operator").value; // Corrected method name
    var result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operator"; // Assigned a value to result
    }

    document.getElementById("result").innerHTML = result;
}
