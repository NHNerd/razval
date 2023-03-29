import { render, renderNew, cardsAdmin } from './moduls/razvalCards.js';
import { popupOpen, popupClose } from './moduls/popup.js';
import { checkAdmin, addNewItem } from './moduls/razvalCardsNew.js';

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
      // fetch('/data/razvalCardsNew.json')
      //   .then((response) => response.json())
      //   .then((cardsNew) => {
      //     console.log(cardsNew);
      //     render(cardsNew);
      //   });
      // render('imgs/icons/new-page.png', 't-shorts-pack.001.png', 3, 4, 5);

      //! add new card for ADMIN USER
      cardsAdmin();
      const addItem = document.querySelector('.addItem');
      addItem.addEventListener('click', () => {
        // addNewItem();

        addNewItem();
        console.log('New item is created');
      });
    }
  });

fetch('http://localhost:3000/razval');
