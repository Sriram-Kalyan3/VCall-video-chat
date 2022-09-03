
let enterpassword = document.getElementById('enterpassword');
let reenterpassword = document.getElementById('reenterpassword');
let errormessage = document.getElementById('error-message');

function len(event) {
    let passlen = event.target.value.length;
    if (passlen < 10) {
        errormessage.textContent = 'Password must contain atleast 10 characters';
    } else {
        errormessage.textContent = '';
    }
    if (passlen === 0) {
        errormessage.textContent = 'Enter password';
    }
}
enterpassword.addEventListener('input', len);

function error(event) {
    let pass = enterpassword.value;
    let value = event.target.value;
    if (value !== pass) {
        errormessage.textContent = 'sorry! enterpassword didnot match';
    } else {
        errormessage.textContent = '';
    }
    if (value.length === 0) {
        errormessage.textContent = 'Enter conformation password';
    }
}
reenterpassword.addEventListener('input', error);