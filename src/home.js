export default function loadHome() {
    const RestName = document.createElement('div');
    const RestInfo = document.createElement('div');

    RestName.classList.add("restaurant-name");
    RestInfo.classList.add("order-online");

    RestName.innerHTML = "PASTA HEAVEN";
    RestInfo.innerHTML = "ONLINE ORDERING NOW AVAILABLE!";

    document.querySelector("#content").appendChild(RestName);
    document.querySelector("#content").appendChild(RestInfo);

    setTimeout(() => {
        RestName.classList.add('loaded');
    }, 0);
    setTimeout(() => {
        RestInfo.classList.add("loaded");
    }, 1000)
}
