document.getElementById('btn-deposit').addEventListener('click', function () {
    // set deposit 
    const inputFieldValue = getInputValue('txt-deposit');
    const elementFieldValue = getElementValue('total-deposit');
    const newDepositValue = inputFieldValue + elementFieldValue;
    setElementValue('total-deposit', newDepositValue);

    //set total balance
    const previousbalance = getElementValue('total-balance');
    const newBalance = previousbalance + inputFieldValue;
    setElementValue('total-balance', newBalance);
});