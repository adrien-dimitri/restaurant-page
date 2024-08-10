import Menu from './menu.csv';

import spaghetti from "./spaghetti_carbonara.jpg";
import penne from "./penne_arrabbiata.jpg";
import lasagna from "./lasagna.jpg";
import ravioli from "./ravioli.jpg";
import pesto from "./pesto_genovese.jpg";
import fettuccine from "./fettuccine_alfredo.jpg";

export default function loadMenu() {
    const menuItems = Menu;
    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container");

    menuItems.forEach(item => {
        menuContainer.appendChild(createItem(item[0], item[1], item[2], item[3]));
    });
    document.querySelector("#content").appendChild(menuContainer)

}

export function createItem(title, price, ingredients, pictureSrc) {
    const imageMap = {
        "spaghetti_carbonara.jpg": spaghetti,
        "penne_arrabbiata.jpg": penne,
        "lasagna.jpg": lasagna,
        "ravioli.jpg": ravioli,
        "pesto_genovese.jpg": pesto,
        "fettuccine_alfredo.jpg": fettuccine
    };

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-container');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-container');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('item-title');
    const priceDiv = document.createElement('div');
    priceDiv.classList.add('item-price');
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.classList.add('item-ingredients');
    const picture = document.createElement('img');
    picture.classList.add('item-picture');

    titleDiv.innerHTML = title;
    priceDiv.innerHTML = "€ " + price;
    ingredientsDiv.innerHTML = ingredients;

    const imagePath = imageMap[pictureSrc];
    picture.src = imagePath;

    detailsDiv.appendChild(titleDiv);
    detailsDiv.appendChild(priceDiv);
    detailsDiv.appendChild(ingredientsDiv);
    itemDiv.appendChild(detailsDiv);
    itemDiv.appendChild(picture);

    setTimeout(() => {
        itemDiv.classList.add("loaded");
    }, 0)

    return itemDiv;
}