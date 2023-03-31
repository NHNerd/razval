export function popupContainer(content, popup) {
  const element1 = document.createElement('div');
  const element2 = document.createElement('div');
  element1.classList.add('popupBg', 'popupClose'); // add class to the parent element
  element2.classList.add('popupContainer'); // add class to the parent element
  element2.innerHTML = content;
  popup.append(element1, element2);
}

export function popupOpen(product) {
  const content1 = `
  <a href="#" class="popupClose">X</a>
  <img class="poupImg" src=${product.imgPath} />
  <div class="popupArray">
    <div class="popupName">${product.itemName}</div>
    <div class="popupPrice">${product.price}</div>
    <div class="popupDiscription">${product.description}</div>
    <div class="popupSize">size: XXL</div>
    <button class="popupCart">add to cart</button>
  </div>
  `;
  const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    popupContainer(content1, popup);
  });
}

export function popupOpenNew() {
  const content2 = `
  <div class="containerNewLeft">
    <img class="addPhoto" src="/imgs/icons/new-page.png">
    <p>name</p>
    <input type="text" class="inputText name" >
    <p>price</p>
    <input type="text" class="inputText price" >
    <p>size</p>
    <input type="text" class="inputText size" >
  </div>
  <div class="containerNewRight">
  <p>description</p>
    <input type="text" class="inputText description" >
  </div>
  <button class="pushNewItem">Push</button>
  `;
  const popup = document.querySelector('.popup');
  popupContainer(content2, popup);
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
