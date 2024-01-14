
function task1() {
    let factor = parseInt(prompt("Write number"))
    function factorial(factor) {
        if (factor == 0 || factor == 1) {
            return 1;
        } else {
            return factor * factorial(factor - 1);
        }
    }
    alert(`Factorial:${factorial(factor)}`)
}

function task2() {
    let start = parseInt(prompt("Write start of range"));
    let end = parseInt(prompt("Write end of range"));

    if (isNaN(start) || isNaN(end)) {
        alert("Please enter valid numbers.");
        return;
    }

    let forwardNumbers = "";
    let backwardNumbers = "";

    function printNumbersForward(start, end) {
        if (start <= end) {
            forwardNumbers += start + " ";
            printNumbersForward(start + 1, end);
        }
    }

    function printNumbersBackward(start, end) {
        if (start <= end) {
            printNumbersBackward(start + 1, end);
            backwardNumbers += start + " ";
        }
    }

    printNumbersForward(start, end);
    printNumbersBackward(start, end);

    alert("Forward Order: " + forwardNumbers + "\nBackward Order: " + backwardNumbers);
}

function task3() {

    let number = parseInt(prompt("Write number"));

    if (isNaN(number)) {
        alert("Write correct number.");
        return;
    }

    function Palindrome(number, reversed) {
        if (number == 0) {
            alert(`Palindrome for this number: ${reversed}`);
        } else {
            let lastDigit = number % 10;
            let newReversed = reversed * 10 + lastDigit;
            Palindrome(Math.floor(number / 10), newReversed);
        }
    }

    Palindrome(number, 0);
}
function task4() {
    let numb = parseInt(prompt('Write number'))
    function sumOfDigitsRecursive(number) {
        if (typeof number != 'number' || isNaN(number)) {
            alert("Write correct number.");
            return 0;
        }

        if (number == 0) {
            return 0;
        } else {
            let lastDigit = number % 10;
            return lastDigit + sumOfDigitsRecursive(Math.floor(number / 10));
        }
    }
    alert(`The sum of the digits of a number: ${sumOfDigitsRecursive(numb)}`);

}
function task5() {
    const numberOfPairs = parseInt(prompt("Enter the number of nested pairs of parentheses"));

    function generateParenthesesRecursive(n, currentString = '') {
        if (n === 0) {
            alert(currentString);
            return;
        }
    
        generateParenthesesRecursive(n - 1, `(${currentString})`);
    }
    
    generateParenthesesRecursive(numberOfPairs);

    
}