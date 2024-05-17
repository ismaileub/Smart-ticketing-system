

const allSits = document.getElementsByClassName('sit');

function getElementValueBYId(id) {
    const element = document.getElementById(id);
    const value = element.innerText;
    return value;

}
function setElementValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}


for (const sit of allSits) {
    sit.addEventListener('click', function (event) {

        const targetDiv = event.target.closest('.sit');

        targetDiv.classList.remove('bg-[#F7F8F8]');
        targetDiv.classList.add('bg-color');

        const clickedSit = targetDiv.children[0];

        clickedSit.classList.remove('text-[#03071280]');
        clickedSit.classList.add('text-white');

        //const selectedSit = document.getElementById('selected-sit').innerText;
        const value = getElementValueBYId('sit-count');
        var newValue = parseInt(value) + 1;

        setElementValueById('sit-count', newValue);
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        const targetSit = targetDiv.children[0].innerText;

        p1.innerText = targetSit
        p2.innerText = 'Economoy';
        p3.innerText = '550';

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        const addedDiv = document.getElementById('added-div');

        div.classList.add('your-sit');
        addedDiv.appendChild(div);
        const total = getElementValueBYId('total-price');

        var newTotal = parseInt(total) + 550;
        setElementValueById('total-price', newTotal);

        const grandTotal = document.getElementById('grand-total');
        const grandTotalValue = getElementValueBYId('total-price');
        grandTotal.innerText = grandTotalValue;





    })

}
