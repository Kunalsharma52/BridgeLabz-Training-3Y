let firstNumber = Math.floor(Math.random() * 20) + 1;
let secondNumber = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

let answer;

switch (operator) {
    case "+":
        answer = firstNumber + secondNumber;
        break;

    case "-":
        answer = firstNumber - secondNumber;
        break;

    case "*":
        answer = firstNumber * secondNumber;
        break;

    case "/":
        answer = firstNumber / secondNumber;
        break;
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

if (operator === "/") {
    console.log("Correct Answer:", answer.toFixed(2));
} else {
    console.log("Correct Answer:", answer);
}