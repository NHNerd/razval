export let checkAdmin = true;

export function renderNew(imgPath) {
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.classList.add('cards', 'cardsAdmin', 'newCard'); // add class to the parent element

  element.innerHTML = `
  <div class="img">
  <img class="addItem" src=${imgPath}>
  </div>
  `;
  container.append(element);
}

export function addNewItem(newName, newPrice, newSize, newDescription) {
  fetch('/razval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imgPath: 'imgs/razval/items/t-shorts-pack.001.png',
      imgName: 't-shorts-pack.001.png',
      itemName: newName,
      description: newDescription,
      price: newPrice,
      size: newSize,
    }),
  }).then((response) => response.json());
}
