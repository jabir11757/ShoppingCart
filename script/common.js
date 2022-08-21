function updateSubTotalPrize(elementId) {
    const phonePrizeField = document.getElementById(elementId);
    const currentPhonePrizeString = phonePrizeField.innerText;
    const currentPhonePrize = parseInt(currentPhonePrizeString);
    return currentPhonePrize;
}

function updateFinalAmountField(elementId, value) {
    const subTotalField = document.getElementById(elementId);
    subTotalField.innerText = value;
}

function incudedNewItemTotal() {
    const currentPhonePrize = updateSubTotalPrize('phone-total');
    const currentCasePrize = updateSubTotalPrize('case-total');
    const subTotalPrize = currentPhonePrize + currentCasePrize;
    updateFinalAmountField('sub-total', subTotalPrize);

    const taxAmountString = (subTotalPrize * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    updateFinalAmountField('tax-amount', taxAmount);

    const finalAmount = subTotalPrize + taxAmount;
    updateFinalAmountField('total-amount', finalAmount);

}