import { createItem } from './menu.js';
import Menu from './menu.csv';

function createUserFields() {
    const userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("placeholder", "Name");
    userName.classList.add('input-field');

    const userAddress = document.createElement("select");
    userAddress.classList.add('select-field');
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Delivery Address";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    userAddress.appendChild(defaultOption);

    const fakeAddress1 = document.createElement("option");
    fakeAddress1.value = "123 Main St";
    fakeAddress1.text = "123 Main St";
    userAddress.appendChild(fakeAddress1);

    return { userName, userAddress };
}

function createMenuAndBasket() {
    const basketContainer = document.createElement("div");
    basketContainer.classList.add("basket-container");

    const totalContainer = document.createElement("div");
    totalContainer.classList.add("total-container");
    totalContainer.innerHTML = "<h3>Total: €<span id='total-price'>0.00</span></h3>";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("order-menu");

    const basket = {};
    let totalPrice = 0;

    function updateTotal() {
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }

    Menu.forEach(item => {
        const itemElement = createItem(item[0], item[1], item[2], item[3]);
        const itemImage = itemElement.querySelector('img');
        const itemName = item[0];
        const itemPrice = parseFloat(item[1]);

        itemImage.addEventListener('click', () => {
            if (basket[itemName]) {
                basket[itemName].count++;
                basket[itemName].quantityOverlay.textContent = `x${basket[itemName].count}`;
            } else {
                const basketItemContainer = document.createElement('div');
                basketItemContainer.classList.add('basket-item-container');

                const basketItem = itemImage.cloneNode(true);
                basketItem.classList.add('basket-item');

                const quantityOverlay = document.createElement('div');
                quantityOverlay.classList.add('quantity-overlay');
                quantityOverlay.textContent = 'x1';

                basketItemContainer.appendChild(basketItem);
                basketItemContainer.appendChild(quantityOverlay);

                basketItem.addEventListener('click', () => {
                    if (basket[itemName].count > 1) {
                        basket[itemName].count--;
                        basket[itemName].quantityOverlay.textContent = `x${basket[itemName].count}`;
                    } else {
                        basketContainer.removeChild(basket[itemName].container);
                        delete basket[itemName];
                    }
                    totalPrice -= itemPrice;
                    updateTotal();
                });

                basketContainer.appendChild(basketItemContainer);

                basket[itemName] = {
                    count: 1,
                    quantityOverlay: quantityOverlay,
                    container: basketItemContainer
                };
            }
            totalPrice += itemPrice;
            updateTotal();
        });

        menuContainer.appendChild(itemElement);
    });

    return { basketContainer, totalContainer, menuContainer };
}

function createPlaceOrderButton(userName, userAddress, basketContainer) {
    const placeOrderButton = document.createElement('button');
    placeOrderButton.id = 'place-order-button';
    placeOrderButton.innerText = 'Place Order';
    placeOrderButton.classList.add('place-order-button');

    placeOrderButton.addEventListener('click', () => {
        const userName = document.querySelector('.input-field');
        const userAddress = document.querySelector('.select-field');
        const basketContainer = document.querySelector('.basket-container');

        if (!basketContainer.hasChildNodes()) {
            alert('Please add items to your order.');
        } else if (!userName.value || !userAddress.value) {
            alert('Please fill in your name and address.');
        } else {
            alert('Order placed successfully!');
        }
    });

    return placeOrderButton;
}

function createInstructionContainer() {
    const instructionContainer = document.createElement('div');
    instructionContainer.classList.add('instruction-container');
    instructionContainer.innerHTML = `
        <h3>Instructions:</h3>
        <p><strong>1.</strong> Click on an item image to add it to the basket.</p>
        <p><strong>2.</strong> Click on an item in the basket to remove it or decrease its quantity.</p>
        <p><strong>3.</strong> The total price will update dynamically as you add or remove items.</p>
    `;
    return instructionContainer;
}

export default function loadOrder() {
    const content = document.querySelector("#content");

    const { userName, userAddress } = createUserFields();
    const { basketContainer, totalContainer, menuContainer } = createMenuAndBasket();
    const placeOrderButton = createPlaceOrderButton();
    const instructionContainer = createInstructionContainer();

    const orderContainer = document.createElement("div");
    orderContainer.classList.add("order-container");
    orderContainer.appendChild(menuContainer);

    content.appendChild(userName);
    content.appendChild(userAddress);
    content.appendChild(orderContainer);
    content.appendChild(basketContainer);
    content.appendChild(totalContainer);
    content.appendChild(placeOrderButton);
    content.appendChild(instructionContainer);
}
