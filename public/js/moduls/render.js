export function render(imgNum, itemName, price) {
  let path = '/imgs/razval/items/';
  let img = `t-shorts-pack.${String(imgNum).padStart(3, '0')}.png`;
  let imgPath = path + img;
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.innerHTML = `
      <div class="cards">
        <img src=${imgPath}>
        <p class="cardName">${itemName}</p>
        <p class="cardPrice">${price}$</p>
      </div> 
    `;
  container.append(element);
}
