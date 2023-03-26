export function popupAdd() {
  const onnOff = document.querySelector('.onnOff');
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="popup popupClose"></div>
  <div class="popupContainer">
    <a href="#" class="popupClose">X</a>
    <img class="poupImg" src="/imgs/razval/items/t-shorts-pack.001.png" />
    <div class="popupArray">
      <div class="popupName">Manager of Razval</div>
      <div class="popupPrice">100$</div>
      <div class="popupDiscription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
        perspiciatis quas velit saepe iste vero impedit porro, facere
        tenetur placeat deserunt repudiandae nam dolor, consectetur eius
        ullam quisquam? Dolor tempore inventore nobis beatae totam
        nesciunt? Omnis, quod amet quo, minus nesciunt velit aperiam ab
        magnam distinctio reiciendis, unde maxime!
      </div>
      <div class="popupSize">size: XXL</div>
      <button class="popupCart">add to cart</button>
    </div>
  </div>
  `;
  onnOff.append(element);
}

export function popupClose() {
  //* Select all elements with the same class
  const popupCloses = document.querySelectorAll('.popupClose');
  //* Loop through each element and add click event listene
  popupCloses.forEach((popupClose) => {
    popupClose.addEventListener('click', () => {
      const popupContainer = document.querySelector('.popupContainer');
      const popup = document.querySelector('.popup');
      popupContainer.remove();
      popup.remove();
    });
  });
}
