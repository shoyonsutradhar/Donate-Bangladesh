
const donation = document.getElementById('button-donation')
    .addEventListener('click', function () {
        document.getElementById('donation-btn-display').classList.remove('hidden');
        document.getElementById('btn-history-display').classList.add('hidden');

    })


const history = document.getElementById('button-history')
    .addEventListener('click', function () {

        document.getElementById('donation-btn-display').classList.add('hidden');
        document.getElementById('btn-history-display').classList.remove('hidden');

        


    })
    // document.getElementById('button-history').innerText = <div><p> ${}</p></div>

