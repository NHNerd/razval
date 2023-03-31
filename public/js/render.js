import { render, cardsAdmin } from './moduls/razvalCards.js';
import { popupOpen, popupOpenNew, popupClose } from './moduls/itemDeep.js';
import { checkAdmin, renderNew, addNewItem } from './moduls/razvalCardsNew.js';

fetch('/data/razvalCards.json')
  .then((response) => response.json())
  .then((products) => {
    let iMax = products.length;
    let i = 0;
    products.forEach((product) => {
      // Render items rards
      render(product);

      // Render modal window
      //* window.onload - The code inside the functions is not executed until all other elements of the page have been loaded.
      window.onload = function () {
        const openPopups = document.querySelectorAll('.openPopup');
        openPopups.forEach((openPopup) => {
          openPopup.addEventListener('click', () => {
            const productData = JSON.parse(openPopup.dataset.product);
            popupOpen(productData);
            popupClose();
          });
        });
      };
    });

    if (checkAdmin) {
      // //! add button & style of cards for ADMIN USER
      renderNew('imgs/icons/new-page.png');

      //! add new card for ADMIN USER
      cardsAdmin();
      const addItem = document.querySelector('.addItem');
      addItem.addEventListener('click', () => {
        popupOpenNew();
        popupClose();

        const pushNew = document.querySelector('.pushNewItem');
        pushNew.addEventListener('click', () => {
          let inputName = document.querySelector('.name').value;
          let inputPrice = document.querySelector('.price').value;
          let inputSize = document.querySelector('.size').value;
          let inputDescription = document.querySelector('.description').value;
          console.log(inputName);
          addNewItem(inputName, inputPrice, inputSize, inputDescription);
        });
      });
    }
  });

fetch('http://localhost:3000/razval');
