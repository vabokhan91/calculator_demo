class Calculator {
    constructor() {
        this.operators = ['-', '+', 'x', '÷'];
        this.keys = document.querySelectorAll('#calculator span');
        this.decimalAdded = false;
    }

    evaluate(inputValue) {
        var evaluation = inputValue;
        var lastChar = evaluation[evaluation.length - 1];
        evaluation = evaluation.replace(/x/g, '*').replace(/÷/g, '/');

        if(this.operators.indexOf(lastChar) > -1 || lastChar ==='.'){
            evaluation.replace(/.$/, '');
        }
        this.decimalAdded = false;
        if(evaluation){
            return eval(evaluation);
        }


    }

    dot(input, btnVal) {
        if (!this.decimalAdded) {
            input.innerHTML += btnVal;
        }
    }

    clear() {
        this.decimalAdded = false;
        return '';
    }

    appendSign(input, inputValue, btnVal) {
        var lastChar = inputValue[inputValue.length - 1];
        if(inputValue !== '' && this.operators.indexOf(lastChar) === -1) {
            input.innerHTML += btnVal;
        }else if(inputValue === '' && btnVal === '-'){
            input.innerHTML += btnVal;
        }
        
        if(this.operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
            input.innerHTML = inputValue.replace(/.$/, btnVal);
        }
        this.decimalAdded = false;
    }


}

function init(calc) {
    for (var i = 0; i < calc.keys.length; i++) {
        calc.keys[i].onclick = function (e) {
            var input = document.querySelector('.screen');
            var inputValue = input.innerHTML;
            var btnVal = this.innerHTML;
            if (btnVal === 'C') {
                input.innerHTML = calc.clear();
            } else if (btnVal === '=') {
                input.innerHTML = calc.evaluate(inputValue);
            } else if (calc.operators.indexOf(btnVal) > -1) {
                calc.appendSign(input, inputValue, btnVal);
            } else if (btnVal === '.') {
                calc.dot(input, btnVal);
            } else {
                input.innerHTML += btnVal;
            }
            e.preventDefault();
        }
    }
}

function controller(calc) {



}




window.onload = function (e) {
    var calc = new Calculator();
    init(calc);
}