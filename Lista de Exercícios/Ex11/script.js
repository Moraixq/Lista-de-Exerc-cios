let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById("display").value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function operate(operator) {
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}