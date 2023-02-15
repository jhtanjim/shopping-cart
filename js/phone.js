function updatePhoneNumber(isIncrease) {
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputFieldString = phoneInputField.value;
    const previousPhoneInputField = parseInt(phoneInputFieldString);

    let newPhone;
    if (isIncrease === true) {
        newPhone = previousPhoneInputField + 1;
    }
    else {
        newPhone = previousPhoneInputField - 1;
    }

    phoneInputField.value = newPhone;
    return newPhone;

}

function updatePhonePrice(newPhone) {
    const updatePrice = newPhone * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = updatePrice;
}



//update total
function getTextElementByid(elementId) {

    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const newElement = parseInt(elementFieldString);
    return newElement;
}

function setTextElementValueByid(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;

}



function calculateSubTotal() {
    //calculate total
    const phoneTotal = getTextElementByid('phone-price');
    const caseTotal = getTextElementByid('case-price');

    const CurrentsubTotal = phoneTotal + caseTotal;
    setTextElementValueByid('sub-total', CurrentsubTotal);
    // const subTotal = document.getElementById('sub-total');
    // subTotal.innerText = CurrentsubTotal;
    // //calculate tax
    const taxAmountString = (CurrentsubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueByid('tax-total', taxAmount);

    const finalAmount = CurrentsubTotal + taxAmount;
    setTextElementValueByid('final-total', finalAmount)

}






document.getElementById('btn-phone-plus').addEventListener('click', function () {

    //----------number code--------------

    // const phoneInputField = document.getElementById('phone-input-field');
    // const phoneInputFieldString = phoneInputField.value;
    // const previousPhoneInputField = parseInt(phoneInputFieldString);
    // phoneInputField.value = previousPhoneInputField + 1;

    const newPhone = updatePhoneNumber(true);
    updatePhonePrice(newPhone);


    //------price code----------------

    // const updatePrice = newPhone * 1219;
    // const phonePrice = document.getElementById('phone-price');
    // phonePrice.innerText = updatePrice;

    //---------calculate total-----------
    calculateSubTotal();


})


document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhone = updatePhoneNumber(false)

    updatePhonePrice(newPhone)



    calculateSubTotal()




})