var keys = document.querySelectorAll('#calculator span');
var operators = ['-', '+', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        var input = document.querySelector('.screen');
        var inputValue = input.innerHTML;
        var btnVal = this.innerHTML;
        if(btnVal ==='C') {
            input.innerHTML = '';
            decimalAdded = false;
        } else if(btnVal === '='){
            var evaluation = inputValue;
            var lastChar = evaluation[evaluation.length - 1];
            evaluation = evaluation.replace(/x/g, '*').replace(/÷/g, '/');

            if(operators.indexOf(lastChar) > -1 || lastChar ==='.'){
                evaluation.replace(/.$/, '');
            }

            if(evaluation){
                input.innerHTML = eval(evaluation);
            }
            decimalAdded = false;
        }else if(operators.indexOf(btnVal) > -1) {
            var lastChar = inputValue[inputValue.length - 1];
            if(inputValue !== '' && operators.indexOf(lastChar) === -1) {
                input.innerHTML += btnVal;
            }else if(inputValue === '' && btnVal === '-'){
                input.innerHTML += btnVal;
            }

            if(operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
                input.innerHTML = inputValue.replace(/.$/, btnVal);
            }
            decimalAdded = false;

        } else if(btnVal === '.'){
            if(!decimalAdded) {
                input.innerHTML += btnVal;
            }
        } else  {
            input.innerHTML += btnVal;
        }
        e.preventDefault();
    }
}