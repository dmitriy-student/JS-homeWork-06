const countEl = document.querySelector('#value');
const minusBtnEl = document.querySelector(`[data-action="decrement"]`);
const plusBtnEl = document.querySelector(`[data-action="increment"]`);

minusBtnEl.addEventListener('click', onDecrementCount);
plusBtnEl.addEventListener('click', onIncrementCount);

function onDecrementCount () {
    countEl.textContent = parseInt(countEl.textContent) - 1;
}

function onIncrementCount () {
    countEl.textContent = parseInt(countEl.textContent) + 1;
}