
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var currentValue = document.getElementById('display').value;
    if (currentValue.length > 0) {
        document.getElementById('display').value = currentValue.slice(0, -1);
    }
}


function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}
