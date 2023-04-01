const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('change', onSizeTextChange);

function onSizeTextChange (event) {
    console.log(event.currentTarget.value);

    textEl.style.fontSize = event.currentTarget.value + "px";
}