

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
    // showModal
    document.getElementById("my-modal").showModal();
    // history
    const card1History = document.createElement('div');
    card1History.classList = 'container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl';
    card1History.innerHTML = `
    <h2 class="font-bold text-xl mb-2">${inputAddDonete1} Taka is Donated for Aid for Injured in the Quota Movement </h2>
    <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
`
    const historyItem = document.getElementById('btn-history-display');
    historyItem.insertBefore(card1History , historyItem.firstChild);



}
else{
    alert('Failed to Donate! Please try again.');
}


})