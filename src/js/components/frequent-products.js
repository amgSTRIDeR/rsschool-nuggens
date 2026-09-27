import { products } from '@/data/page-data.js';

export function initFrequentProducts() {
  const step = 172;
  let currentPosition = -6;
  const productsContainer = document.querySelector('.frequent-products__list');
  productsContainer.style.translate = `${currentPosition * step}px 0`;

  const leftButton = document.querySelector('.carousel__button-left');
  const rightButton = document.querySelector('.carousel__button-right');

  const favoriteProductsArray = products.filter((product) => product.isFavorite);
  renderProducts();

  function renderProducts() {
    favoriteProductsArray.forEach((product) => {
      const slideElement = document.createElement('div');
      slideElement.id = product.id;
      slideElement.classList.add('slide');
      slideElement.classList.add('card');
      productsContainer.append(slideElement);

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
      cardCaloriesElement.textContent = product.nutrition.calories + ' kcal';
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

      const buttonDecreaseUseElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'use',
      );
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

      const buttonIncreaseUseElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'use',
      );
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

  leftButton.addEventListener('click', () => {
    if (leftButton.classList.contains('disabled')) return;
    leftButton.classList.add('disabled');
    currentPosition += 1;
    productsContainer.style.translate = `${currentPosition * step}px 0`;

    productsContainer.addEventListener(
      'transitionend',
      () => {
        productsContainer.prepend(productsContainer.lastElementChild);
        currentPosition -= 1;
        productsContainer.style.transition = 'none';
        productsContainer.style.translate = `${currentPosition * step}px 0`;
        productsContainer.getBoundingClientRect();
        productsContainer.style.transition = 'translate 500ms ease';
        leftButton.classList.remove('disabled');
      },
      { once: true },
    );
  });

  rightButton.addEventListener('click', () => {
    if (rightButton.classList.contains('disabled')) return;
    rightButton.classList.add('disabled');
    currentPosition -= 1;
    productsContainer.style.translate = `${currentPosition * step}px 0`;

    productsContainer.addEventListener(
      'transitionend',
      () => {
        productsContainer.append(productsContainer.firstElementChild);
        currentPosition += 1;
        productsContainer.style.transition = 'none';
        productsContainer.style.translate = `${currentPosition * step}px 0`;
        productsContainer.getBoundingClientRect();
        productsContainer.style.transition = 'translate 500ms ease';
        rightButton.classList.remove('disabled');
      },
      { once: true },
    );
  });
}
