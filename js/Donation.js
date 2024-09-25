
document.getElementById('btn-donation').addEventListener('click',function(event){
    event.preventDefault();
    const moneyInput = document.getElementById('input-add-donete').value;
    const moneyInputNumber = parseFloat(moneyInput);
    if(moneyInput >= 0){
        const donateMoney = document.getElementById('donate-money').innerText;
        const donateMoneyNumber = parseFloat(donateMoney);
    
        const totalMoney = donateMoneyNumber + moneyInputNumber;
        document.getElementById('donate-money').innerText = totalMoney;
    
        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);
        const remainingBalance = mainBalanceNumber - moneyInputNumber;
        document.getElementById('main-balance').innerText = remainingBalance;

        // showModal
        document.getElementById("my-modal").showModal();


        

    
    }
    else{
        alert('Failed to Donate! Please try again.');
    }
})


