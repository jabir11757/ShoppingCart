function updateCaseNumber(isIncrease) {
    const caseNumerField = document.getElementById('case-number-field');
    const caseNumerString = caseNumerField.value;
    const previousCaseNumer = parseInt(caseNumerString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumer + 1;
    }
    else {
        newCaseNumber = previousCaseNumer - 1;
    }
    caseNumerField.value = newCaseNumber;
    return newCaseNumber;
}

function updateTotalPrize(newCaseNumber) {
    const caseTotalPrize = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrize;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateTotalPrize(newCaseNumber);
    incudedNewItemTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalPrize(newCaseNumber);
    incudedNewItemTotal();
})