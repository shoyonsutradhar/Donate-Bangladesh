

document.getElementById('btn-donation2').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAddDonete2 = document.getElementById('input-add-donete2').value;
    const inputAddDonete2Number = parseFloat(inputAddDonete2);

    if (inputAddDonete2 >= 0) {
        const donateMoney2 = document.getElementById('donate-money2').innerText;
        const donateMoney2Number = parseFloat(donateMoney2);

        const totalMoney = donateMoney2Number + inputAddDonete2Number;
        document.getElementById('donate-money2').innerText = totalMoney;

        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);

        const remainingBalance = mainBalanceNumber - inputAddDonete2Number;
        document.getElementById('main-balance').innerText = remainingBalance;

        // showmodal
        document.getElementById("my-modal").showModal();

        // history  
        const card1History = document.createElement('div');
        card1History.classList = 'container mx-auto border sm:mx-auto mt-8 p-8 rounded-2xl';
        card1History.innerHTML = `
        <h2 class="font-bold text-xl mb-2">${inputAddDonete2} Taka is Donated for Aid for Injured in the Quota Movement </h2>
        <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p>
    `
        const historyItem = document.getElementById('btn-history-display');
        historyItem.insertBefore(card1History , historyItem.firstChild);



    }
    else {
        alert('Failed to Donate! Please try again.');
    }
})



