let result = document.getElementById('result');

function appendNumber(num) {
    result.value += num;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
