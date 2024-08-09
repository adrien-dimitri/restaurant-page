import './style.css';
import loadHome from './home.js';
import createNav from './navigation.js';
import loadMenu from './menu.js';

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
                console.log("PRESSED ABOUT");
                break;
            case "order":
                console.log("PRESSED ORDER");
                break;
        }
    });
});


