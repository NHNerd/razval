import { render, cardsAdmin } from './moduls/razvalCards.js';
import { popupOpen, popupClose } from './moduls/popup.js';

fetch('/data/razvalCards.json')
  .then((response) => response.json())
  .then((products) => {
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
    if (true) {
      cardsAdmin();
    }
  });
