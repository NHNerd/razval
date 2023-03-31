import { checkAdmin } from './razvalCardsNew.js';

export function render(product, imgNum) {
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.classList.add('cards'); // add class to the parent element
  //! add class for ADMIN USER
  if (checkAdmin) {
    element.classList.add('cardsAdmin');
  }

  element.innerHTML = `
  <img class="openPopup img" src=${product.imgPath}
  data-product='${JSON.stringify(product)}'>
  <p class="cardName">${product.itemName}</p>
  `;
  container.append(element);
}

//! Admin
function createButton(createElement, className) {
  const button = document.createElement(createElement);
  button.className = className;
  return button;
}

export function cardsAdmin() {
  const cardss = document.querySelectorAll('.cards:not(.newCard)');
  cardss.forEach((cards) => {
    const element1 = createButton('span', 'edit');
    const element2 = createButton('span', 'remove');
    const element3 = createButton('span', 'moveLeft');
    const element4 = createButton('span', 'moveRight');
    cards.append(element1, element2, element3, element4);
  });
}
