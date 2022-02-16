// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear deposit amount
    inputField.value = '';

    return amountValue;

}

function updateTotalField(totalFieldId, Amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText)

    const newDepositTotal = previousAmount + Amount;
    totalElement.innerText = newDepositTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    return previousTotalBalance;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousTotalBalance = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousTotalBalance + amount;

    }
    else {
        balanceTotal.innerText = previousTotalBalance - amount;

    }


}






// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount deposit
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);


    // get and undate deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText)

    // const newDepositTotal = previousDepositAmount + newDepositAmount;


    // depositTotal.innerText = newDepositTotal;

    // update acount balance
    // const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousTotalBalance = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousTotalBalance + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    }








});


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawTotalText = withdrawInput.value;
    // const newWithdawAmount = parseFloat(withdrawTotalText);

    // set withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previouseWithdrawText = withdrawTotal.innerText;
    // const previouseWithdrawTotal = parseFloat(previouseWithdrawText);

    // const newWithdrawTotal = previouseWithdrawTotal + newWithdawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;


    // update balance
    // const balanceTotal = document.getElementById('total-balance');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newTotalBalance = previousBalanceTotal - newWithdrawTotal;

    // balanceTotal.innerText = newTotalBalance;
    const newWithdawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdawAmount > 0 && newWithdawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdawAmount)
        updateBalance(newWithdawAmount, false);

    }



})