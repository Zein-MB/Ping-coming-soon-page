let emailAddress = document.getElementById('emailAddress'),
    submitBtn = document.getElementById('submitBtn'),
    errorLabel = document.getElementById('errorLabel'),
    regExp = /\w+(\d+)?@gmail.(com|gov|org)/g;

submitBtn.onclick = (e) => {
    if (regExp.test(emailAddress.value) == false) {
        e.preventDefault()
        emailAddress.style.borderColor = 'hsl(354, 100%, 66%)';
        errorLabel.style.visibility = 'visible';
    } else {
        emailAddress.style.borderColor = '#8393bc59';
        errorLabel.style.visibility = 'hidden';
    }

    if (window.matchMedia('(max-width: 767px)')) {
        errorLabel.style.marginBottom = '10em'
    }
}