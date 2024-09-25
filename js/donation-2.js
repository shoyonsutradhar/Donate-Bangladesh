

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

    }
    else {
        alert('Failed to Donate! Please try again.');
    }
})



