import Logo from './pasta.svg'

export default function createNav() {
    const logo = document.createElement('img');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const about = document.createElement('button');
    const order = document.createElement('button');

    logo.src = Logo;
    logo.alt = "Pasta logo"
    logo.classList.add("logo")
    home.setAttribute("data-action", "home");
    menu.setAttribute("data-action", "menu");
    about.setAttribute("data-action", "about");
    order.setAttribute("data-action", "order");

    home.innerHTML = "HOME";
    menu.innerHTML = "MENU";
    about.innerHTML = "ABOUT";
    order.innerHTML = "ORDER ONLINE";

    const nav = document.querySelector("nav");
    nav.appendChild(logo);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(order);
}