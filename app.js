const displayValue = document.getElementById('display');
const calcButtons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const operators = document.querySelectorAll('#operator');
const digits = document.querySelectorAll('#digit');
const equals = document.querySelector('#equals');
let number = '';
let num1 = '';
let num2 = '';
let operator = '';


//UNFINISHED
digits.forEach((digit) => {
   
    digit.addEventListener('click', () => {
        
             if(operator !== '' && number !== '') {
                number = '';
            } 
            number += digit.innerHTML;
            displayValue.innerHTML = number;
        
           
    })
});

const clearDisplay = () => {
    displayValue.innerHTML = ''
    number = displayValue.innerHTML;
}

operators.forEach((operatorValue) => {
    operatorValue.addEventListener('click', () => {
        if (num1 !== ''){
            num2 = number;
        } else {
            num1 = number;
        }
        console.log(number);
        if(operator !== '') {
            alert('Only one operator is allowed')
        } else if(number === '') {
            alert("Please enter a number first")
        }
        operator = operatorValue.innerHTML;
    })
});



//Basic Operations
const add = (x, y) => {
    const sum = parseFloat(x) + parseFloat(y);
    return sum;
}

const subtract = (x, y) => {
    const difference = parseFloat(x) - parseFloat(y);
    return difference;
}

const multiply = (x, y) => {
    const product = parseFloat(x) * parseFloat(y);
    return product;
}

const divide = (x, y) => {
    if (y === 0) {
        alert('Cannot divide by zero!')
    }
    else {
        const quotient = parseFloat(x) / parseFloat(y);
        return quotient;
    }
    
}

const operate = (operator, num1, num2) => {
    switch (operator) {

        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    }
}







