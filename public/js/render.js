import { render } from './moduls/razvalCards.js';
import { popupAdd, popupClose } from './moduls/popup.js';

// Render items rards
fetch('/data/razvalCards.json')
  .then((response) => response.json())
  .then((products) => {
    let imgNum = 0;
    products.forEach((product) => {
      imgNum++;

      render(imgNum, product.itemName, product.price);
    });
  });

// Render modal window

//* window.onload - The code inside the functions is not executed until all other elements of the page have been loaded.
window.onload = function () {
  const openPopup = document.querySelector('.openPopup');
  openPopup.addEventListener('click', () => {
    popupAdd();
    popupClose();
  });
};

// document.getElementById('restartBtn').onclick = function () {
//   console.log(1111111111111);
// };

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
