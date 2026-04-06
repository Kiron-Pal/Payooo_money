document.getElementById("send-btn").addEventListener("click", function () {

  // taking user account number
  const userNumber = getValueFromInput("user-number");

  if (userNumber.length !== 11) {
    alert("Please enter a valid account number");
    return;
  }

  // taking transfer amount
  const amount = getValueFromInput("send-amount");

  if (amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  // current balance
  const currentBalance = getBalance();

  // check balance
  if (amount > currentBalance) {
    alert("Your balance is not enough");
    return;
  }

  // calculate new balance
  const newBalance = currentBalance - Number(amount);

  // pin check
  const pin = getValueFromInput("send-pin");

  if (pin === "1234") {

    alert("Send money Successful");

    setbalance(newBalance);
    console.log(newBalance);

    const history = document.getElementById("history-container");

    const newhistory = document.createElement("div");

    newhistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100">
        ${amount} TK sent successfully <br>
        to ${userNumber} <br> 
        at ${new Date()}
      </div>
    `;

    history.appendChild(newhistory);

  } else {
    alert("wrong Pin");
    return;
  }

});