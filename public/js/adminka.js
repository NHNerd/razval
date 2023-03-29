export let checkAdmin = true;

fetch('/data/razvalCards.json')
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
  });
