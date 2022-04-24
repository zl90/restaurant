
import pepperoniImage from './pepperoni.jpg';
import mergheritaImage from './margherita.jpg';
import chefImage from './chef.jpg';

import alfredoImage from './alfredo.jpg';
import penneImage from './penne.jpg';
import bolognaImage from './bologna.jpg';

const PIZZA_TITLE = "Pizza";
const PASTA_TITLE = "Pasta";
const MENU_TITLE = "Menu";
const pizzas = [
    {name: "Pepperoni", price: "17", image: pepperoniImage},
    {name: "Margherita", price: "19", image: mergheritaImage},
    {name: "Chef's Special", price: "19", image: chefImage}
];

const pastas = [
    {name: "Alfredo", price: "11", image: alfredoImage},
    {name: "Penne", price: "11", image: penneImage},
    {name: "Bologna", price: "13", image: bolognaImage}
];

function loadMenuTab () {
    // Heading
    const content = document.querySelector('.content');
    const menuHeadingContainer = document.createElement('div');
    menuHeadingContainer.classList.add('menu-heading-container');
    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = MENU_TITLE;
    menuHeadingContainer.appendChild(menuHeading);
    content.appendChild(menuHeadingContainer);

    // Pizzas
    const pizzaContainer = document.createElement('div');
    pizzaContainer.classList.add('pizza-container');
    const pizzaHeadingContainer = document.createElement('div');
    pizzaHeadingContainer.classList.add('pizza-heading-container');
    const pizzaHeading = document.createElement('p3');
    pizzaHeading.classList.add('pizza-heading');
    pizzaHeading.textContent = PIZZA_TITLE;
    pizzaHeadingContainer.appendChild(pizzaHeading);
    pizzaContainer.appendChild(pizzaHeadingContainer);
    content.appendChild(pizzaContainer);
    const pizzaCardContainer = document.createElement('div');
    pizzaCardContainer.classList.add('pizza-card-container');
    pizzaContainer.appendChild(pizzaCardContainer);
    for (let i = 0; i < pizzas.length; i++) {
        const pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza-card');
        const top = document.createElement('div');
        top.classList.add('pizza-card-top');
        const name = document.createElement('div');
        name.classList.add('card-name');
        name.textContent = pizzas[i].name;
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.textContent = pizzas[i].price;
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = pizzas[i].image;
        top.appendChild(name);
        top.appendChild(price);
        pizzaCard.appendChild(top);
        pizzaCard.appendChild(image);
        pizzaCardContainer.appendChild(pizzaCard);
    }

    // Pastas
    const pastaContainer = document.createElement('div');
    pastaContainer.classList.add('pasta-container');
    const pastaHeadingContainer = document.createElement('div');
    pastaHeadingContainer.classList.add('pasta-heading-container');
    const pastaHeading = document.createElement('p3');
    pastaHeading.classList.add('pasta-heading');
    pastaHeading.textContent = PASTA_TITLE;
    pastaHeadingContainer.appendChild(pastaHeading);
    pastaContainer.appendChild(pastaHeadingContainer);
    content.appendChild(pastaContainer);
    const pastaCardContainer = document.createElement('div');
    pastaCardContainer.classList.add('pasta-card-container');
    pastaContainer.appendChild(pastaCardContainer);
    for (let i = 0; i < pastas.length; i++) {
        const pastaCard = document.createElement('div');
        pastaCard.classList.add('pasta-card');
        const top = document.createElement('div');
        top.classList.add('pasta-card-top');
        const name = document.createElement('div');
        name.classList.add('card-name');
        name.textContent = pastas[i].name;
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.textContent = pastas[i].price;
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = pastas[i].image;
        top.appendChild(name);
        top.appendChild(price);
        pastaCard.appendChild(top);
        pastaCard.appendChild(image);
        pastaCardContainer.appendChild(pastaCard);
    }
}

export default loadMenuTab;