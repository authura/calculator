const displayValue = document.getElementById('display');
const calcButtons = document.querySelector('.button-container');
const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const digits = document.querySelectorAll('#digit');

calcButtons.addEventListener('click', () => {
    
})


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





