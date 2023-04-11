// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if ther user won
// 6. give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        const depositAmount = prompt("enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Inavlid deposit amount, try again");
    } else {
        return depositAmount;
    }
    }
};

deposit();