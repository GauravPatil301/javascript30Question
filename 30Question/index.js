// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
const calculator = {
    add: function (num1,num2) {
        return num1 + num2;
    },
    subtract: function (num1,num2) {
        return num1 -num2;
    },
    multiply: function (num1,num2) {
        return num1 * num2;
    },
    division: function (num1,num2) {
        return num1/num2
    }
}
const num1 = parseFloat(prompt("Enter the first number: "))
const num2 = parseFloat(prompt("Enter the second number: "))
const operation = prompt("Enter operation (+ , - , * , / )")
switch (operation) {
    case "+":
        console.log(`The result is: ${calculator.add(num1,num2)}`);
        break;
    case "-":
        console.log(`The result is: ${calculator.subtract(num1,num2)}`);
        break;    
    case "*":
        console.log(`The result is: ${calculator.multiply(num1,num2)}`);
        break;
    case "/":
        console.log(`The result is: ${calculator.division(num1,num2)}`);
        break;        
    default:
        console.log("Invalid operation");
        break;
}