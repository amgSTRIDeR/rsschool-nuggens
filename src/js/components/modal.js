import { products } from '@/data/page-data.js';

export function initModal() {
  const cardModalElement = document.querySelector('.card__modal');

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) {
      return;
    }

    const id = card.id;
    const caloriesElement = card.querySelector('.card__calories');
    let calories = Number.parseInt(caloriesElement.textContent);

    const amountElement = card.querySelector('.card__amount');
    let amount = Number.parseInt(amountElement.textContent);

    const currentProduct = products.find((product) => product.id === id);
    const modalElement = cardModalElement.querySelector('.modal');
    modalElement.querySelector('.card__image').src = `src/assets/${currentProduct.image}`;
    modalElement.querySelector('.header__title').textContent = currentProduct.name;
    modalElement.querySelector('.header__calories').textContent = calories + ' kcal';
    modalElement.querySelector('.header__amount').textContent =
      amount + ' ' + currentProduct.serving.unit;

    modalElement.querySelector('.protein').textContent = currentProduct.nutrition.protein + ' g';
    modalElement.querySelector('.fats').textContent = currentProduct.nutrition.fats + ' g';
    modalElement.querySelector('.carbs').textContent = currentProduct.nutrition.carbs + ' g';

    modalElement.querySelector('.modal__calories__input').value = calories;
    modalElement.querySelector('.modal__quantity__input').value = amount;
    modalElement.querySelector('.modal__quantity .number-field__unit').textContent =
      currentProduct.serving.unit;
    modalElement.querySelector('.modal__notes').textContent = currentProduct.note;
    cardModalElement.dataset.productId = currentProduct.id;
    cardModalElement.showModal();
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card__modal') || e.target.classList.contains('modal__close')) {
      cardModalElement.close();
    }
  });

  const form = cardModalElement.querySelector('.modal__form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const calories = Number(formData.get('calories'));
    const amount = Number(formData.get('quantity'));
    const productId = cardModalElement.dataset.productId;

    const cardToRenew = document.getElementById(productId);
    cardToRenew.querySelector('.card__calories').textContent = calories + ' kcal';
    cardToRenew.querySelector('.card__amount').textContent =
      amount + ' ' + products.find((product) => product.id === productId).serving.unit;
    cardToRenew.querySelector('.card__counter-value').textContent =
      amount + ' ' + products.find((product) => product.id === productId).serving.unit;

    cardModalElement.close();
  });
}
