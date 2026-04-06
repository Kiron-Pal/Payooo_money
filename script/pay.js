document.getElementById("pay-bill-btn").addEventListener("click", function () {

  // getting bank name
  const bankName = getValueFromInput("pay-bill-bank");
  if (bankName === "Select bank") {
    alert("Please choose a bank");
    return;
  }

  // get account number
  const accnumber = getValueFromInput("pay-bill-number");
  if (accnumber.length !== 11) {
    alert("please enter a valid number");
    return;
  }

  // get amount
  const amount = getValueFromInput("pay-bill-amount");
  if (amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const currentBalance = getBalance();

  if (amount > currentBalance) {
    alert("Insufficient balance");
    return;
  }

  const newbalance = currentBalance - Number(amount);

  // get pin
  const pin = getValueFromInput("pay-bill-pin");

  if (pin === "1234") {

    alert(
      `Bill paid successfully to ${bankName} with account number ${accnumber} at ${new Date()}`
    );

    setbalance(newbalance);
    console.log(newbalance);

    const history = document.getElementById("history-container");

    const newhistory = document.createElement("div");

    newhistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100">
        Bill paid successfully to ${bankName} <br> 
        with account number ${accnumber} <br>
         amount: ${amount} TK <br>
        at ${new Date()}
      </div>

      
    `;

    history.appendChild(newhistory);

  } else {
    alert("wrong pin");
    return;
  }
});