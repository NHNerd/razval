import { render } from './moduls/render.js';

fetch('/data/razvalCards.json')
  .then((response) => response.json())
  .then((products) => {
    let imgNum = 0;
    products.forEach((product) => {
      imgNum++;

      render(imgNum, product.itemName, product.price);
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
