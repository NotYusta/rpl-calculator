let value1 = parseInt(prompt("Angka ke-1"));
let value2 = parseInt(prompt("Angka ke 2"));
let operator = prompt("Operator (must be +,-,* or x or .,/,%,^ or **");
let result;

if (operator == "+") result = value1 + value2;
else if (operator == "-") result = value1 - value2;
else if (operator == "*" || operator == "x" || operator == ".") result = value1 * value2;
else if (operator == "/") result = value1 / value2;
else if (operator == "%") result = value1 % value2;
else if (operator == "^" || operator == "**") result = value1 ** value2;
else result = "Invalid operator or number!";

document.write(result);
