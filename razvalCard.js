let path = './imgs/razval/test/t-shorts-pack/';

function render(imgNum, price) {
  let img = `t-shorts-pack.${String(imgNum).padStart(3, '0')}.png`;
  let imgPath = path + img;
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.innerHTML = `
    <div class="cards">
      <img src=${imgPath}>
      <p class="cardName">t-short</p>
      <p class="cardPrice">${price}$</p>
    </div> 
  `;
  container.append(element);
}
let price = '100';
let imgNum = 1;
let imgSum = 8;
for (imgNum; imgNum <= imgSum; imgNum += 1) {
  render(imgNum, price);
}

// function test(n, x) {

//   let result = n * x;
//   console.log(result);
// }

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
