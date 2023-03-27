import { render } from './moduls/razvalCards.js';
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
  });

// class Card {
//   constructor(imgPath, name, description, price) {
//     this.imgName = imgName;
//     this.name = name;
//     this.description = description;
//     this.price = price;
//   }
// }

// sumCards = 8;
// for (let i = 1; i <= sumCards; i += 1) {
//   const Card1 = new Card(
//     's' + String(i),
//     't-short' + String(i),
//     'super' + String(i),
//     '100$' + String(i)
//   );
//   console.log(Card1);
// }
