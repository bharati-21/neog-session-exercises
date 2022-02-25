const btn = document.querySelector('.btn-submit-password');
btn.addEventListener('click', checkPassword);

function checkPassword (event) {
    const psd1 = document.querySelector('#password').value;
    const psd2 = document.querySelector('#retype-password').value;
    if(psd1!== null && psd2!==null) {
        if(psd1 === psd2) {
           
            alert('Password Matches!');
        }
        else {
            alert('Password mismatch');
        }
    }
    else {
        alert('Password cannot be empty')
    }
}