const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onSizeTextChange);

function onSizeTextChange (event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}