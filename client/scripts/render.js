import { render, cardsAdmin } from './moduls/razvalCards.js';
import { popupOpen, popupOpenNew, popupClose } from './moduls/itemDeep.js';
import { checkAdmin, renderNew, addNewItem } from './moduls/razvalCardsNew.js';

async function itemsData() {
  const response = await fetch('/data/razvalCards.json');
  const items = await response.json();
  return items;
}

function renderCards(items) {
  items.forEach(render);
}

function addCardClickHandlers() {
  const openPopups = document.querySelectorAll('.openPopup');
  openPopups.forEach((openPopup) => {
    openPopup.addEventListener('click', () => {
      const itemData = JSON.parse(openPopup.dataset.item);
      popupOpen(itemData);
      popupClose();
    });
  });
}

async function init() {
  const items = await itemsData();
  renderCards(items);
  addCardClickHandlers();

  if (checkAdmin) {
    renderNew('imgs/icons/new-page.png');
    cardsAdmin();

    const addItem = document.querySelector('.addItem');
    addItem.addEventListener('click', () => {
      popupOpenNew();
      popupClose();

      const pushNew = document.querySelector('.pushNewItem');
      pushNew.addEventListener('click', () => {
        const inputName = document.querySelector('.name').value;
        const inputPrice = document.querySelector('.price').value;
        const inputSize = document.querySelector('.size').value;
        const inputDescription = document.querySelector('.description').value;
        addNewItem(inputName, inputPrice, inputSize, inputDescription);
      });
    });
  }
}

init();
