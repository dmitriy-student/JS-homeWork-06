const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul#ingredients');

const createListEL = ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = `${ingredient}`;
  listEl.classList.add('item');
  
  return listEl;
}

const listELementsEl = ingredients.map(createListEL);

ulEl.append(...listELementsEl);
