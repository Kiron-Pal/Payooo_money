// Get the cashout button element

document.getElementById("cashout-btn").addEventListener("click", function() {
//taking the cashout number value

    const cashoutNumber = getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length !== 11) {
        alert("Please enter a valid phone number");
        return;
    }

    //taking the cashout amount value


    const cashoutAmount = getValueFromInput("cashout-amount");
    

    //TAKING THE BALANCE AMOUNT

   const currentBalance = getBalance();

    //CALCULATING THE AMOUNT AFTER CASHOUT

    const newBlance = currentBalance - Number(cashoutAmount);
    //CHECKING IF THE BALANCE IS ENOUGH FOR CASHOUT
    

    if(newBlance < 0) {
        alert("Your balance is not enough");
        return;
    }


    //taking the cashout pin value
    const Pin = getValueFromInput("cashout-pin");
    if(Pin === "1234") {
        alert("Cashout Done");
          console.log(newBlance);
           setbalance(newBlance);

            const history = document.getElementById("history-container");

    const newhistory = document.createElement("div");

    newhistory.innerHTML = `
     <div class="transaction-card p-5 bg-base-100">
    money cashed ${cashoutAmount}TK out successfully <br>
     to ${cashoutNumber} <br>
     at ${new Date()}
          

        </div>

    `


    history.appendChild(newhistory);
        
    } else {
        alert("wrong Pin");
        return;
    }

});