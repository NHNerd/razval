export function render(product, imgNum) {
  // let path = '/imgs/razval/items/';
  // let img = `t-shorts-pack.${String(imgNum).padStart(3, '0')}.png`;
  // let imgPath = path + img;
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="cards">
  <img class="openPopup" src=${product.imgPath}
  data-product='${JSON.stringify(product)}'>
    <p class="cardName">${product.itemName}</p>
</div> 
`;
  container.append(element);
}
