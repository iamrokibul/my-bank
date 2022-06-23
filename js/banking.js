// Handle deposit button event
document.getElementById("deposit-btn").addEventListener("click", function(){
    // Get the amount deposited 
    const depositInput = document.getElementById("deposit-amount");
    const depositText = depositInput.value;
    const newDepositAmount = parseFloat(depositText);
    // Update deposit total
    const depositBalance = document.getElementById("deposit-balance");
    
    const prevDepositText = depositBalance.innerText;
    const prevDepositAmount = parseFloat(prevDepositText);
    const currentTotalDepositAmount = prevDepositAmount + newDepositAmount;
    // Conditionally checked 
    if(depositText){
        depositBalance.innerText = currentTotalDepositAmount;
    }
    
    // Update account balance
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    const newBalanceAmount = currentBalanceAmount + newDepositAmount;
    // Conditionally checked 
    if(depositText){
        currentBalance.innerText = newBalanceAmount;
    }

    // Clear the deposit input value 
    depositInput.value = '';
});

// Handle Withdraw button event
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // Get the amount deposited 
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawText);
    // Update deposit total
    const withdrawBalance = document.getElementById("withdraw-balance");
    
    const prevWithdrawText = withdrawBalance.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawText);
    const currentTotalWithdrawAmount = prevWithdrawAmount + newWithdrawAmount;
    if(withdrawText){
        withdrawBalance.innerText = currentTotalWithdrawAmount;
    }
    
    // // Update account balance
    const currentCutBalance = document.getElementById("current-balance");
    const currentBalanceAmount = currentCutBalance.innerText;
    // const currentBalanceAmount = parseFloat(currentBalanceText);
    const newBalanceAmount = currentBalanceAmount - newWithdrawAmount;
    // Conditionally checked 
    if(withdrawText){
        currentCutBalance.innerText = newBalanceAmount;
    }

    // // Clear the deposit input value 
    withdrawInput.value = '';
});