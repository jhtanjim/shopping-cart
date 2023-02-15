
function updateCaseNumber(isIncrease) {
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputField.value;
    const previousCaseInputField = parseInt(caseInputFieldString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseInputField + 1;
    }
    else {
        newCaseNumber = previousCaseInputField - 1;
    }


    caseInputField.value = newCaseNumber;

    return newCaseNumber;
}

function caseTotalPrice(newCaseNumber) {

    const totalCasePrice = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = totalCasePrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true)

    // const caseTotalPrice = newCaseNumber * 59;
    // const casePrice = document.getElementById('case-price');
    // casePrice.innerText = caseTotalPrice;

    caseTotalPrice(newCaseNumber)
    calculateSubTotal()

});


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false)

    // const caseTotalPrice = newCaseNumber * 59;
    // const casePrice = document.getElementById('case-price');
    // casePrice.innerText = caseTotalPrice;
    caseTotalPrice(newCaseNumber);
    calculateSubTotal()
})





















// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputFieldString = caseInputField.value;
//     const previousCaseInputField = parseInt(caseInputFieldString);


//     caseInputField.value = previousCaseInputField + 1;


// })


// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputFieldString = caseInputField.value;
//     const previousCaseInputField = parseInt(caseInputFieldString);


//     caseInputField.value = previousCaseInputField - 1;


// })


















