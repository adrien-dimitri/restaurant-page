
export default function loadContent() {
    const RestName = document.createElement('div');
    const RestInfo = document.createElement('div')

    RestName.classList.add("restaurant-name")
    RestInfo.classList.add("order-online")
    
    RestName.innerHTML = "PASTA HEAVEN"
    RestInfo.innerHTML = "ONLINE ORDERING NOW AVAILABLE!"

    return {
        RestName,
        RestInfo
    }
}