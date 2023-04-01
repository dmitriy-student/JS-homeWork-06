const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur', onValidation);

function onValidation () {
    const inputLength = parseInt(inputEL.getAttribute('data-length'));
    const inputValue = inputEL.value;
  
    if (inputValue.length === inputLength) {
        inputEL.classList.add('valid');
        inputEL.classList.remove('invalid');
    } else {
        inputEL.classList.add('invalid');
        inputEL.classList.remove('valid');
    }
  
}
