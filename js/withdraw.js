document.getElementById('btn-withdraw').addEventListener('click', function () {
    //set total Withdraw
    const inputFieldValue = getInputValue('txt-withdraw');
    const elementFieldValue = getElementValue('total-withdraw');
    const totalWithdraw = inputFieldValue + elementFieldValue;
    setElementValue('total-withdraw', totalWithdraw);

    //set total balance after withdraw
    const previousBalance = getElementValue('total-balance');
    const newBalance = previousBalance - inputFieldValue;
    setElementValue('total-balance', newBalance);
});