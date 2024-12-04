document.getElementById('calcButton').addEventListener('click', function () {
    const billAmount = parseFloat(document.getElementById('calcBillAmount').value);
    const tipPercentage = parseFloat(document.getElementById('calcTipPercentage').value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert('Please enter a valid tip percentage.');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('calcTipResult').textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('calcTotalResult').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});
