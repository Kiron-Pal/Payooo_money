document.getElementById("bonus-btn")
  .addEventListener("click", function () {

    // coupon code access and validation
    const couponCode = getValueFromInput("bonus-number").trim().toUpperCase();

    if (couponCode !== "BONUS100") {
      alert("Invalid Coupon");
      return;
    }

    let bonus = 0;

    if (couponCode === "BONUS100") {
      bonus = 100;
    }

    // current balance
    const currentBalance = getBalance();

    const newBalance = currentBalance + bonus;

    alert("Coupon Added ✅");

    setbalance(newBalance);

    // ✅ history add (tomar ager style)
    const history = document.getElementById("history-container");

    const newhistory = document.createElement("div");

    newhistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100">
        ${bonus} TK bonus added <br>
        using coupon (${couponCode})  <br>
        at ${new Date()}
      </div>
    `;

    history.appendChild(newhistory);

  });