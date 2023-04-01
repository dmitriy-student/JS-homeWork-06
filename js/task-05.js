const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onOutputName);

function onOutputName (event) {
    refs.nameOutput.textContent = event.currentTarget.value;
}