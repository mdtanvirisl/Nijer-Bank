function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = parseFloat(elementField.innerText);
    return elementValue;
}

function setElementValue(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}