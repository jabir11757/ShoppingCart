function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('btn-phone-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrize(newPhoneNumber) {
    const newPhonePrize = newPhoneNumber * 1219;
    const phonePrizeField = document.getElementById('phone-total');
    phonePrizeField.innerText = newPhonePrize;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrize(newPhoneNumber);

    //calculate total
    incudedNewItemTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrize(newPhoneNumber);

    //calculate total
    incudedNewItemTotal();
})