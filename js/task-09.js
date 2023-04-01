const refs = {
  colorSpan: document.querySelector('.color'),
  changeColorButton: document.querySelector('.change-color'),
  body: document.body,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.changeColorButton.addEventListener('click', onChangeColor);

function onChangeColor () {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.colorSpan.textContent = newColor;
}