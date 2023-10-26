let calculator = JSON.parse(localStorage.getItem('calculator')) || {
    num1: '',
    num2: '',
    operator: '',
    result: ''
};

const operators = ['+', '-', 'x', '/'];
function calculate(num) {
    if (num === 'c') {
        calculator = {
            num1: '',
            num2: '',
            operator: '',
            result: ''
        };
        displayCalculator(num);
        localStorage.removeItem('calculator');
    }
    else if (calculator.operator === '') {
        if (operators.includes(num)) {
            if (calculator.result !== '') {
                calculator.num1 = calculator.result;
            }
            calculator.num1 = Number(calculator.num1);
            calculator.operator = num;
            displayCalculator(num);
            localStorage.setItem('calculator', JSON.stringify(calculator));
        }
        else {
            if (num === '=')
                return;
            else if (num === '.' && calculator.num1.includes('.'))
                return;
            calculator.num1 += num;
            displayCalculator(num);
            localStorage.setItem('calculator', JSON.stringify(calculator));
        }
    }
    else {
        if (num !== '=' && num !== 'c') {
            calculator.num2 += num;
            displayCalculator(num);
            localStorage.setItem('calculator', JSON.stringify(calculator));
        }

        else if (num === '=') {
            calculator.num2 = Number(calculator.num2);
            if (calculator.operator === '+') {
                calculator.result = calculator.num1 + calculator.num2;
                displayCalculator(num);
                localStorage.setItem('calculator', JSON.stringify(calculator));
            }
            else if (calculator.operator === '-') {
                calculator.result = calculator.num1 - calculator.num2;
                displayCalculator(num);
                localStorage.setItem('calculator', JSON.stringify(calculator));
            }
            else if (calculator.operator === 'x') {
                calculator.result = calculator.num1 * calculator.num2;
                displayCalculator(num);
                localStorage.setItem('calculator', JSON.stringify(calculator));
            }
            else if (calculator.operator === '/') {
                calculator.result = calculator.num1 / calculator.num2;
                displayCalculator(num);
                localStorage.setItem('calculator', JSON.stringify(calculator));
            }
            calculator.num1 = calculator.result.toString();
            calculator.result = '';
            calculator.operator = ''
            calculator.num2 = '';
        }
    }
}

function displayCalculator(character = NaN) {
    if (character === '=') {
        document.querySelector('.calculator-result').innerHTML = calculator.result;
    }
    else if (character === 'c') {
        document.querySelector('.calculator-result').innerHTML = '';
    }
    else if (operators.includes(character)) {
        document.querySelector('.calculator-result').innerHTML = calculator.num1 + calculator.operator;
    }
    else {
        if (calculator.operator === '') {
            document.querySelector('.calculator-result').innerHTML = calculator.num1;
        }
        else {
            document.querySelector('.calculator-result').innerHTML = calculator.num1 + calculator.operator + calculator.num2;
        }
    }
}