
 function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id , value);
    return value;

 }

 function getBalance(){
   const balanceElement = document.getElementById('balance');
   const balance = balanceElement.innerText;
   console.log('balance' , Number(balance));
   return Number(balance);
 }

 function setbalance(value){
   const balanceElement = document.getElementById("balance");
   balanceElement.innerText = value;
 }

 function show(id){
  
   const addmoney = document.getElementById('add-money');
   const cashout = document.getElementById('cashout');
   const transaction = document.getElementById('transaction-history');
   const paybill = document.getElementById('pay-bill');

   addmoney.classList.add('hidden');
   cashout.classList.add('hidden');
   transaction.classList.add('hidden');
   paybill.classList.add('hidden');

    const element = document.getElementById(id);
    element.classList.remove('hidden');

   
   
 }