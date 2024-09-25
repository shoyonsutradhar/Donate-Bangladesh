
const donation = document.getElementById('button-donation')
    donation.addEventListener('click', function () {
        history.classList.remove('bg-green-500');
        donation.classList.add('bg-green-500');


        document.getElementById('donation-btn-display').classList.remove('hidden');
        document.getElementById('btn-history-display').classList.add('hidden');
        

    })


const history = document.getElementById('button-history');
    history.addEventListener('click', function () {
        history.classList.add('bg-green-500');
        donation.classList.remove('bg-green-500');


        document.getElementById('donation-btn-display').classList.add('hidden');
        document.getElementById('btn-history-display').classList.remove('hidden');

        


    })

