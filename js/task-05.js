const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onOutputName);

function onOutputName(event) {
    const name = event.currentTarget.value.trim();
    refs.nameOutput.textContent = name || 'Anonymous';
}
