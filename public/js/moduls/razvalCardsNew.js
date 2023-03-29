export let checkAdmin = true;
// const newProduct = {
//   imgPath: 'imgs/razval/items/t-shorts-pack.005.png',
//   imgName: 't-shorts-pack.001.png',
//   itemName: 'NEW ITEM',
//   description: 'SHORT',
//   price: '99999999',
// };
export function addNewItem() {
  fetch('/razval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imgPath: 'imgs/razval/items/t-shorts-pack.001.png',
      imgName: 't-shorts-pack.001.png',
      itemName: 'ASS',
      description: 'TISHKA',
      price: '9999999999',
    }),
  }).then((response) => response.json());

  // fetch('/data/razvalCards.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
}
