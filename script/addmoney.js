document.getElementById("add-money-btn").addEventListener("click", function () {
  // getting the bank name and account
  const bankName = getValueFromInput("add-bank");
  if (bankName === "Select Bank") {
    alert("Please choose a bank");
    return;
  }

  //get bank account number
  const accnumber = getValueFromInput("add-number");
  if (accnumber.length !== 11) {
    alert(" please enter a valid number");
    return;
  }

  //get ammount
  const amount = getValueFromInput("add-amount");
  if (amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  const newbalance = getBalance() + Number(amount);

  //get pin
  const pin = getValueFromInput("add-pin");
  if (pin === "1234") {
    alert(
      `money addeduccessfully from ${bankName} with account number ${accnumber} at ${new Date()} `,
    );
    setbalance(newbalance);
    console.log(newbalance);

    const history = document.getElementById("history-container");

    const newhistory = document.createElement("div");

    newhistory.innerHTML = `
     <div class="transaction-card p-5 bg-base-100">
    money added successfully from${bankName} <br>
     with account number ${accnumber}<br>
      at ${new Date()}
          

        </div>

    `


    history.appendChild(newhistory);

  } else {
    alert("wrong pin");
    return;
  }
});
