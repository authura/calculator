const displayValue = document.getElementById('display');
const calcButtons = document.querySelector('.btn');
const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');


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
    const quotient = parseFloat(x) / parseFloat(y);;
    return quotient;
}



