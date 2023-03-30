export let checkAdmin = true;

// export function newCardOpen(product, imgNum) {
//   const newCard = document.querySelector('.newCard');
//   const element = document.createElement('div');
//   element.innerHTML = `
//       <div class="popupBg popupClose"></div>
//       <div class="popupContainer">
//         <a href="#" class="popupClose">X</a>
//         <img class="poupImg" src=${product.imgPath} />
//         <div class="popupArray">
//           <div class="popupName">${product.itemName}</div>
//           <div class="popupPrice">${product.price}</div>
//           <div class="popupDiscription">${product.description}</div>
//           <div class="popupSize">size: XXL</div>
//           <button class="popupCart">add to cart</button>
//         </div>
//       </div>
//     `;
//     newCard.append(element);
// }

// export function popupClose() {
//   //* Select all elements with the same class
//   const popupCloses = document.querySelectorAll('.popupClose');
//   //* Loop through each element and add click event listene
//   popupCloses.forEach((popupClose) => {
//     popupClose.addEventListener('click', () => {
//       const popupContainer = document.querySelector('.popupContainer');
//       const popupBg = document.querySelector('.popupBg');
//       popupContainer.remove();
//       popupBg.remove();
//     });
//   });
// }

let newProduct = {
  imgPath: 'imgs/razval/items/t-shorts-pack.001.png',
  imgName: 't-shorts-pack.001.png',
  itemName: 'ASS',
  description: 'TISHKA',
  price: '19999999999999999999',
};

export function addNewItem() {
  fetch('/razval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  }).then((response) => response.json());
}
