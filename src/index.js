import './style.css';
import loadHome from './home.js';
import createNav from './navigation.js';
import loadMenu from './menu.js';
import loadAbout from './about.js'
import loadOrder from './order.js'

createNav();
loadHome();

const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => {
    button.addEventListener(("click"), () => {
        document.querySelector("#content").innerHTML = ""
        switch (button.dataset.action) {
            case "home":
                loadHome();
                break;
            case "menu":
                loadMenu();
                break;
            case "about":
                loadAbout();
                break;
            case "order":
                loadOrder();
                break;
        }
    });
});


