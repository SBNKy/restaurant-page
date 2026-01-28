import "./style.css";
import createHome from "./components/Home/Home";
import createMenu from "./components/Menu/Menu";

const contentContainer = document.querySelector("main");
const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const contactBtn = document.querySelector("#contact-button");

function loadComponent(component) {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(component);
}

homeBtn.addEventListener("click", (e) => {
    loadComponent(createHome());
});


const homeComponent = createHome();
loadComponent(homeComponent)