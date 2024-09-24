

document.getElementById('btn-donation1').addEventListener('click' ,function(event){
    event.preventDefault();

    const inputAddDonete1 = document.getElementById('input-add-donete1').value;
    const inputAddDonete1Number = parseFloat(inputAddDonete1);

if(inputAddDonete1 >= 0){
    const donateMoney1 = document.getElementById('donate-money1').innerText;
    const donateMoney1Number = parseFloat(donateMoney1);
    const totalMoney = donateMoney1Number + inputAddDonete1Number;
    document.getElementById('donate-money1').innerText = totalMoney;

    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance);

    const remainingBalance = mainBalanceNumber - inputAddDonete1Number;
    document.getElementById('main-balance').innerText = remainingBalance;

    document.getElementById("my-modal").showModal();

}
else{
    alert('Failed to Donate! Please try again.');
}


})