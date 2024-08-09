import './style.css';
import loadContent from './home.js';

const content = loadContent();

document.querySelector("#content").appendChild(content.RestName);
document.querySelector("#content").appendChild(content.RestInfo);