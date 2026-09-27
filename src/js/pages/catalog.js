import { initApp } from '../main.js';
import { products } from '@/data/page-data.js';

initApp();

const catalogListElement = document.querySelector('.catalog__list');
const foodProductsArray = products.filter((product) => product.category === 'food');
const drinksProductsArray = products.filter((product) => product.category === 'drinks');
const cheatFoodProductsArray = products.filter((product) => product.category === 'cheat-food');

renderProducts('food');

function renderProducts(category) {
  let products;
  switch (category) {
    case 'food':
      products = foodProductsArray;
      break;
    case 'cheat-food':
      products = cheatFoodProductsArray;
      break;
    case 'drinks':
      products = drinksProductsArray;
      break;
    default:
      products = foodProductsArray;
  }
  catalogListElement.innerHTML = ``;
  products.forEach((product) => {
    const slideElement = document.createElement('div');
    slideElement.id = product.id;
    slideElement.classList.add('slide');
    slideElement.classList.add('card');
    catalogListElement.append(slideElement);

    const imageElement = document.createElement('img');
    imageElement.src = `src/assets/${product.image}`;
    imageElement.classList.add('card__image');
    imageElement.setAttribute('aria-hidden', true);

    slideElement.append(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = product.name;
    titleElement.classList.add('card__title');

    slideElement.append(titleElement);

    const cardInfoElement = document.createElement('div');
    cardInfoElement.classList.add('card__info');

    slideElement.append(cardInfoElement);

    const cardCaloriesElement = document.createElement('span');
    cardCaloriesElement.classList.add('card__calories');
    cardCaloriesElement.textContent = product.nutrition.calories + 'kcal';
    cardInfoElement.append(cardCaloriesElement);

    const spanElement = document.createElement('span');
    spanElement.textContent = '·';
    cardInfoElement.append(spanElement);

    const cardAmountElement = document.createElement('span');
    cardAmountElement.textContent = product.serving.amount + ' ' + product.serving.unit;
    cardAmountElement.classList.add('card__amount');
    cardInfoElement.append(cardAmountElement);

    const cardCounterElement = document.createElement('div');
    cardCounterElement.classList.add('card__counter');
    slideElement.append(cardCounterElement);

    const cardCounterButtonDecreaseElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    cardCounterButtonDecreaseElement.classList.add(
      'card__counter-button',
      'card__counter-button--increase',
    );
    cardCounterElement.append(cardCounterButtonDecreaseElement);

    const buttonDecreaseUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    buttonDecreaseUseElement.setAttribute('href', 'src/assets/icons/sprite.svg#icon-minus');
    cardCounterButtonDecreaseElement.append(buttonDecreaseUseElement);

    const currentServeSizeElement = document.createElement('span');
    currentServeSizeElement.classList.add('card__counter-value');
    currentServeSizeElement.textContent = product.serving.amount + ' ' + product.serving.unit;
    cardCounterElement.append(currentServeSizeElement);

    const cardCounterButtonIncreaseElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    cardCounterButtonIncreaseElement.classList.add(
      'card__counter-button',
      'card__counter-button--increase',
    );
    cardCounterElement.append(cardCounterButtonIncreaseElement);

    const buttonIncreaseUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    buttonIncreaseUseElement.setAttribute('href', 'src/assets/icons/sprite.svg#icon-plus');
    cardCounterButtonIncreaseElement.append(buttonIncreaseUseElement);

    const cardFooterElement = document.createElement('div');
    cardFooterElement.classList.add('card__footer');
    slideElement.append(cardFooterElement);

    const buttonBorderedElement = document.createElement('button');
    buttonBorderedElement.classList.add('button');
    buttonBorderedElement.classList.add('button--bordered');
    buttonBorderedElement.classList.add('button--medium');
    cardFooterElement.append(buttonBorderedElement);

    const buttonBorderedSpan = document.createElement('span');
    buttonBorderedSpan.classList.add('button__text');
    buttonBorderedSpan.textContent = 'Edit';
    buttonBorderedElement.append(buttonBorderedSpan);

    const buttonFilledElement = document.createElement('button');
    buttonFilledElement.classList.add('button');
    buttonFilledElement.classList.add('button--filled');
    buttonFilledElement.classList.add('button--medium');
    cardFooterElement.append(buttonFilledElement);

    const buttonFilledSpan = document.createElement('span');
    buttonFilledSpan.classList.add('button__text');
    buttonFilledSpan.textContent = 'Add';
    buttonFilledElement.append(buttonFilledSpan);
  });
}

const foodCategoryButtonElement = document.querySelector('.button__food');
const drinksCategoryButtonElement = document.querySelector('.button__drinks');
const cheatFoodCategoryButtonElement = document.querySelector('.button__cheat-food');

foodCategoryButtonElement.addEventListener('click', () => {
  drinksCategoryButtonElement.classList.remove('active');
  cheatFoodCategoryButtonElement.classList.remove('active');
  foodCategoryButtonElement.classList.add('active');
  renderProducts('food');
});

drinksCategoryButtonElement.addEventListener('click', () => {
  foodCategoryButtonElement.classList.remove('active');
  cheatFoodCategoryButtonElement.classList.remove('active');
  drinksCategoryButtonElement.classList.add('active');
  renderProducts('drinks');
});

cheatFoodCategoryButtonElement.addEventListener('click', () => {
  foodCategoryButtonElement.classList.remove('active');
  drinksCategoryButtonElement.classList.remove('active');
  cheatFoodCategoryButtonElement.classList.add('active');
  renderProducts('cheat-food');
});
