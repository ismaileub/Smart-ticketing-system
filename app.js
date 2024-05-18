function scrollToSection() {
    document.getElementById('sit-div').scrollIntoView({ behavior: 'smooth' });
}




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

        const maxSit = getElementValueBYId('sit-count');
        if (parseInt(maxSit) + 1 > 4) {
            alert("You can't select more then 4 sit");
            return;
        }





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

        targetDiv.style.pointerEvents = 'none';




    })

}

function discountForCoupon() {
    const coupon = document.getElementById('coupon-felid');
    const couponValue = coupon.value;
    if (couponValue === 'NEW15') {
        const grandTotal = getElementValueBYId('grand-total');

        const discount = parseInt(grandTotal) * .15;
        const newGrandTotal = parseInt(grandTotal) - discount;
        setElementValueById('grand-total', newGrandTotal);
        const button = document.getElementById('applyButton');
        if (grandTotal !== '0') {
            button.disabled = true;
        }


    }

    else if (couponValue === 'Couple20') {
        const grandTotal = getElementValueBYId('grand-total');
        const discount = parseInt(grandTotal) * .20;
        const newGrandTotal = parseInt(grandTotal) - discount;
        setElementValueById('grand-total', newGrandTotal);
        const button = document.getElementById('applyButton');

        //button.setAttribute('disabled', true);
        if (grandTotal !== '0') {
            button.disabled = true;
        }

    }
    else {
        alert('Invalid coupon code');
    }


}
function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return value;

}
function getElementById(id) {
    const element = document.getElementById('id');
    return element;
}

function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function purchaseSit() {
    const name = getInputValueById('passenger-name');
    const number = getInputValueById('passenger-number');
    const numberOfSit = getElementValueBYId('sit-count');

    if (numberOfSit === '0') {
        alert('Selected your sit');
    }

    else if (name === '' || number === '') {
        alert('Give your name and phone number');
    }

    else {
        addElementById('header');
        addElementById('main');
        addElementById('footer');

        removeElementById('buy-success');


    }

}
