export function popupOpen(product, imgNum) {
  // let path = '/imgs/razval/items/';
  // let img = `t-shorts-pack.${String(imgNum).padStart(3, '0')}.png`;
  // let imgPath = path + img;
  // console.log(imgPath);
  const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="popupBg popupClose"></div>
      <div class="popupContainer">
        <a href="#" class="popupClose">X</a>
        <img class="poupImg" src=${product.imgPath} />
        <div class="popupArray">
          <div class="popupName">${product.itemName}</div>
          <div class="popupPrice">${product.price}</div>
          <div class="popupDiscription">${product.description}</div>
          <div class="popupSize">size: XXL</div>
          <button class="popupCart">add to cart</button>
        </div>
      </div>
    `;
    popup.append(element);
  });
}

export function popupClose() {
  //* Select all elements with the same class
  const popupCloses = document.querySelectorAll('.popupClose');
  //* Loop through each element and add click event listene
  popupCloses.forEach((popupClose) => {
    popupClose.addEventListener('click', () => {
      const popupContainer = document.querySelector('.popupContainer');
      const popupBg = document.querySelector('.popupBg');
      popupContainer.remove();
      popupBg.remove();
    });
  });
}
